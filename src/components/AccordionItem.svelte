<script lang="ts">
  import { AccordionItem, AccordionButton, AccordionHeader } from 'malachite-ui';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let title: string;
</script>

<AccordionItem let:panel let:isOpen>
  <AccordionHeader as="h3">
    <AccordionButton
      class="h-16 w-full | flex items-center justify-between | border-b border-b-blue-gray/50 text-left focus:text-soft-red">
      <span> {title} </span>
      <span class="transform transition {isOpen ? 'text-soft-red rotate-180' : ''}">
        <i class="bx bx-chevron-down text-2xl" />
      </span>
    </AccordionButton>
  </AccordionHeader>
  <div slot="panel" use:panel class="py-4" transition:slide={{ duration: 300, easing: quintOut }}>
    <p class="text-blue-gray leading-relaxed">
      <slot />
    </p>
  </div>
</AccordionItem>
