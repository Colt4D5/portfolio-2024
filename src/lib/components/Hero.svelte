<script>
	import Button from "$components/ui/button/button.svelte";

</script>
<div id="hero" class="h-[32rem]">

  <div class="relative isolate p-6 lg:p-8">
    <div class="mx-auto max-w-2xl pt-24 pb-48">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" class="font-semibold text-fountain-blue-600 hover:text-fountain-blue-500"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-fountain-blue-600 sm:text-6xl">Data to enrich your online business</h1>
        <p class="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/about">Contact Info</Button>
          <a href="/contact" class="text-sm font-semibold leading-6">About me <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #hero {
    background-color: var(--background-drk);
    background-image: linear-gradient(to bottom, hsl(var(--background-drk) / 1) 0%, 65%, hsl(var(--background-drk) / 1), hsl(var(--background-drk) / 0) 100%) !important;
  }
</style>
