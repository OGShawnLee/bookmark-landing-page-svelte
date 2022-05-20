<script>
  import { AccordionItem, Header } from '@components';
  import { Accordion } from 'malachite-ui/components';
</script>

<section class="flex flex-col items-center gap-9">
  <Header title="Frequently Asked Questions" id="faq">
    Here are some of our FAQs. If you have any other questions you’d like answered please feel free
    to email us.
  </Header>
  <div class="flex flex-col gap-6 sm:w-md md:w-xl">
    <Accordion>
      <AccordionItem title="What is Bookmark?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget
        ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
      </AccordionItem>
      <AccordionItem title="How can I request a new browser?">
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
      </AccordionItem>
      <AccordionItem title="Is there a mobile app?">
        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
        condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra
        purus. Sed sollicitudin ex et ultricies bibendum.
      </AccordionItem>
      <AccordionItem title="What about other Chromium browsers?">
        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
        Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
      </AccordionItem>
    </Accordion>
    <button class="button button--blue w-full mx-auto py-3 px-6 | lg:w-[fit-content]">
      More Info
    </button>
  </div>
</section>
