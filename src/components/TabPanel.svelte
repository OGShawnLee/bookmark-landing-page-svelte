<script lang="ts">
  import { TabPanel } from 'malachite-ui/components';
  import { slide } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

  export let illustration: string;
  export let title: string;
</script>

<TabPanel as="slot" let:panel>
  <section
    class="grid gap-12 | outline-none | lg:grid-cols-12"
    use:panel
    in:slide={{ easing: quadOut }}>
    <div class="mx-auto lg:col-span-6">
      <img src={illustration} alt="" width="440" height="380" />
    </div>
    <div class="flex flex-col gap-6 | text-center | lg:(col-span-6 justify-center text-left)">
      <h3 class="text-2xl text-blue-dark font-medium">{title}</h3>
      <p class="text-blue-gray">
        <slot />
      </p>
      <button class="button button--blue w-full py-3 | lg:(max-w-[fit-content] px-6)">
        More Info
      </button>
    </div>
  </section>
</TabPanel>
