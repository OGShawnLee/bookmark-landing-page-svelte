<script lang="ts">
  import './app.css';
  import { Download, FAQ, Features, Footer, Header, Hero } from '@layout';
</script>

<Header layout="max-w-xs mx-auto | sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl" />

<main
  class="max-w-xs mx-auto mt-28 | flex flex-col gap-20 | sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl">
  <Hero />
  <Features />
  <Download />
  <FAQ />
</main>

<Footer layout="mt-24" />
