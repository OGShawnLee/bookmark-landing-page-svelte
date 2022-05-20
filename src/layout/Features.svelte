<script lang="ts" context="module">
  import { useClassNameResolver } from 'malachite-ui/hooks';

  const tabs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
  const barClassName = useClassNameResolver<'isSelected'>({
    base: 'absolute bottom-0 right-1/2 h-1 w-1/2 | bg-soft-red rounded-md transition transform translate-x-1/2 | lg:w-full',
    selected: { on: 'scale-x-100', off: 'scale-x-0' },
  });
</script>

<script lang="ts">
  import { Header, TabPanel } from '@components';
  import { Tab, TabGroup, TabList, TabPanels } from 'malachite-ui/components';
  import { tab1, tab2, tab3 } from '@assets';

  let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<section class="flex flex-col gap-9">
  <Header title="Features">
    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks
    sync between your devices so you can access them on the go.
  </Header>
  <TabGroup class="grid gap-12 place-items-center" vertical={width < 1024}>
    <TabList class="w-full | flex flex-col | lg:(flex-row max-w-2xl)">
      {#each tabs as tab, index (index)}
        <Tab
          class={{
            base: 'relative h-12 w-full | transition hover:text-soft-red focus:text-soft-red <lg:(border-t border-t-blue-gray/25 last:border-b border-b-blue-gray/25)',
            selected: { on: 'text-blue-dark', off: 'text-blue-gray' },
          }}
          let:isSelected>
          <span class="font-medium"> {tab} </span>
          <span class={barClassName({ isSelected })} />
        </Tab>
      {/each}
    </TabList>
    <TabPanels>
      <TabPanel title="Bookmark in one click" illustration={tab1}>
        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
        complete control over how you manage your favourite sites.
      </TabPanel>
      <TabPanel title="Intelligent search" illustration={tab2}>
        Our powerful search feature will help you find saved sites in no time at all. No need to
        trawl through all of your bookmarks.
      </TabPanel>
      <TabPanel title="Share your bookmarks" illustration={tab3}>
        Easily share your bookmarks and collections with others. Create a shareable link that you
        can send at the click of a button.
      </TabPanel>
    </TabPanels>
  </TabGroup>
</section>
