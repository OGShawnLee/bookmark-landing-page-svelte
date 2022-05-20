<script lang="ts" context="module">
  import { isEmpty } from 'malachite-ui/predicate';

  function isValidEmail(email: string | null) {
    if (!email || isEmpty(email)) return false;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import { error } from '@assets';

  let email: string | null;
  let state: 'IDLE' | 'ERROR' = 'IDLE';

  function handleSubmit() {
    if (isValidEmail(email)) {
      state = 'IDLE';
      email = '';
    } else state = 'ERROR';
  }
</script>

<form class="flex flex-col gap-4 | md:(grid grid-cols-12)" on:submit|preventDefault={handleSubmit}>
  <div
    class="order-1 col-span-8 relative p-0.5 | rounded-md transition {state === 'ERROR'
      ? 'bg-soft-red'
      : 'bg-soft-blue'}">
    <label class="sr-only" for="email"> Email </label>
    <div class="relative">
      <input
        class="w-full py-3 px-6 | bg-white rounded-md shadow-lg placeholder-blue-gray"
        placeholder="Enter your email address"
        type="text"
        bind:value={email}
        id="email" />
      {#if state === 'ERROR'}
        <div
          class="absolute top-1/2 right-3 transform -translate-y-1/2"
          transition:fade={{ duration: 150 }}>
          <img src={error} alt="" />
        </div>
      {/if}
    </div>
    {#if state === 'ERROR'}
      <span class="px-3 | text-xs text-white" transition:fade={{ duration: 150 }}>
        Whoops, make sure it's an email!
      </span>
    {/if}
  </div>
  <button class="order-2 col-span-4 | button button--red self-start w-full py-3">
    Contact Us
  </button>
</form>
