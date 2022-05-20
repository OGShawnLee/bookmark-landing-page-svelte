<script>
  import { hero } from '@assets';
</script>

<section class="grid gap-20 lg:grid-cols-12">
  <div class="lg:(col-span-6 order-2)">
    <img src={hero} alt="" />
  </div>
  <div
    class="flex flex-col gap-6 | text-center | lg:(col-span-6 order-1 text-left justify-center) ">
    <h1 class="text-3xl text-blue-dark font-medium | lg:text-4xl xl:text-5xl">
      A Simple Bookmark Manager
    </h1>
    <p class="text-blue-gray">
      A clean and simple interface to organize your favourite websites. Open a new browser tab and
      see your sites load instantly. Try it for free.
    </p>
    <div class="flex items-center <lg:justify-between gap-4 | text-sm">
      <button class="button button--blue w-full py-3 | lg:(max-w-[fit-content] px-6)">
        Get it on Chrome
      </button>
      <button class="button button--gray w-full py-3 | lg:(max-w-[fit-content] px-6)">
        Get it on Firefox
      </button>
    </div>
  </div>
</section>
