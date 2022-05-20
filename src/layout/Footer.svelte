<script lang="ts">
  import { Form } from '@components';
  import { Logo } from '../icon';
  import { facebook, twitter } from '@assets';

  export let layout: string;
</script>

<footer class={layout}>
  <section class="bg-soft-blue py-16">
    <div class="max-w-xs mx-auto | flex flex-col gap-12 sm:max-w-md md:max-w-xl">
      <div class="flex flex-col gap-2 text-center">
        <!-- scroll margin doesnt work with sr-only -->
        <h2 class="sr-only" id="contact">Contact</h2>
        <span class="uppercase text-sm text-white/75 tracking-0.25em">
          35,000+ already joined
        </span>
        <span class="text-2xl text-white font-medium md:text-3xl lg:text-4xl">
          Stay up-to-date with what we're doing
        </span>
      </div>
      <Form />
    </div>
  </section>
  <div class="bg-blue-dark py-12">
    <div
      class="mx-auto | flex flex-col items-center gap-9 lg:(lg:max-w-4xl xl:max-w-6xl flex-row justify-between)">
      <div class="<lg:contents lg:flex flex-row gap-12">
        <Logo isOpen={false} isWhite={true} />
        <nav>
          <ul class="flex flex-col gap-6 | text-center text-blue-gray lg:flex-row">
            <li class="transition duration-300 hover:text-white focus-within:text-white">
              <a class="uppercase tracking-wider" href="#features"> Features </a>
            </li>
            <li class="transition duration-300 hover:text-white focus-within:text-white">
              <a class="uppercase tracking-wider" href="#pricing"> Pricing </a>
            </li>
            <li class="transition duration-300 hover:text-white focus-within:text-white">
              <a class="uppercase tracking-wider" href="#contact"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-x-8">
        <button class="transition transform duration-150 hover:scale-125 focus:scale-140">
          <span class="sr-only"> Follow us on Facebook </span>
          <img src={facebook} alt="Facebook" />
        </button>
        <button class="transition transform duration-150 hover:scale-125 focus:scale-140">
          <span class="sr-only"> Follow us on Twitter </span>
          <img src={twitter} alt="Twitter" />
        </button>
      </div>
    </div>
  </div>
</footer>
