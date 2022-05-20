<script lang="ts">
  import { dots } from '@assets';

  export let icon: string;
  export let browser: string;
  export let version: number;
  export let translateY = '';
</script>

<article
  class="py-8 | flex flex-col items-center gap-6 | rounded-md shadow-lg transform {translateY}">
  <div class="px-8 | contents">
    <img src={icon} alt="" />
    <header class="text-center">
      <h3 class="mb-2 text-xl text-blue-dark font-medium">Add to {browser}</h3>
      <span class="text-blue-gray"> Minimum version {version} </span>
    </header>
  </div>
  <img src={dots} alt="" />
  <div class="w-full px-8">
    <button class="button button--blue w-full py-3"> Add & Install Extension </button>
  </div>
</article>
