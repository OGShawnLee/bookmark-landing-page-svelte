<script lang="ts">
  import { CardBrowser, Header } from '@components';
  import { chrome, firefox, opera } from '@assets';
</script>

<section class="flex flex-col gap-9 | lg:gap-32">
  <Header title="Download the extension" id="download">
    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd
    like us to prioritize.
  </Header>
  <div class="grid gap-6 lg:grid-cols-3">
    <CardBrowser browser="Chrome" icon={chrome} version={62} translateY="lg:-translate-y-18" />
    <CardBrowser browser="Firefox" icon={firefox} version={55} translateY="lg:-translate-y-9" />
    <CardBrowser browser="Opera" icon={opera} version={46} />
  </div>
</section>
