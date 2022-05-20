<script lang="ts" context="module">
  import type { Action } from 'svelte/action';

  const hideScrollbar: Action = () => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return {
      destroy: () => (document.body.style.overflow = overflow),
    };
  };

  const links = ['Features', 'Pricing', 'Contact'];
</script>

<script lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from 'malachite-ui/components';
  import { close as iClose, facebook, hamburger, twitter } from '@assets';
  import { Logo } from '../icon';
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let layout = '';

  const body = document.body;
  let button: HTMLElement;
</script>

<Popover
  class="fixed top-0 right-0 left-0 h-24 z-90 | flex items-center justify-between | bg-white/80"
  as="header"
  let:isOpen>
  <div class="w-full {layout} flex items-center justify-between">
    <Logo isOpen={false} />

    <div class="lg:hidden">
      <PopoverButton class="active-grow">
        <img src={isOpen ? iClose : hamburger} alt="" />
      </PopoverButton>
      <PopoverPanel as="slot" let:panel let:close>
        <nav
          class="fixed inset-0 z-90 | bg-blue-dark/95 | text-blue-gray overflow-y-auto"
          use:panel
          use:hideScrollbar
          transition:slide={{ easing: quintOut }}
          on:introstart={() => button.focus({ preventScroll: true })}>
          <div class="{layout} h-full min-h-[520px] pb-12 | flex flex-col">
            <div class="min-h-24 w-full | flex items-center justify-between">
              <Logo isOpen />
              <button class="active-grow" bind:this={button} on:click={close}>
                <img src={iClose} alt="" />
              </button>
            </div>
            <ul class="flex flex-col items-center">
              {#each links as link}
                <li
                  class="w-full h-18 | flex items-center justify-center border-t border-t-blue-gray/75 last:(border-b border-b-blue-gray/75)">
                  <a
                    class="uppercase text-2xl hover:text-white focus:text-white tracking-wide"
                    href="#{link.toLowerCase()}"
                    on:click={() => close(body)}>
                    {link}
                  </a>
                </li>
              {/each}
            </ul>
            <button
              class="min-h-14 my-6 | rounded-md border-2 border-blue-gray uppercase text-2xl text-white font-medium tracking-wide focus:border-white hover:text-white">
              Login
            </button>
            <div class="mt-auto mx-auto | space-x-8" out:fade={{ duration: 0 }}>
              <button class="transition transform duration-150 hover:scale-125 focus:scale-140">
                <span class="sr-only"> Follow us on Facebook </span>
                <img src={facebook} alt="Facebook" />
              </button>
              <button class="transition transform duration-150 hover:scale-125 focus:scale-140">
                <span class="sr-only"> Follow us on Facebook </span>
                <img src={twitter} alt="Twitter" />
              </button>
            </div>
          </div>
        </nav>
      </PopoverPanel>
    </div>

    <nav class="hidden lg:flex items-center gap-16">
      <ul class="contents">
        {#each links as link}
          <li>
            <a
              class="uppercase hover:text-soft-red focus:text-soft-red"
              href="#{link.toLowerCase()}">
              {link}
            </a>
          </li>
        {/each}
      </ul>
      <button class="button button--red py-2 px-6 | uppercase tracking-wide"> Login </button>
    </nav>
  </div>
</Popover>

<style>
  a,
  button {
    @apply transform transition duration-150;
  }
</style>
