<script lang="ts">
  export let title: string;
  export let id = title.toLowerCase();
</script>

<header class="max-w-xl mx-auto | space-y-3 text-center">
  <h2 class="scroll-mt-24 | text-2xl text-blue-dark font-medium | lg:text-3xl" {id}>{title}</h2>
  <p class="text-blue-gray">
    <slot />
  </p>
</header>
