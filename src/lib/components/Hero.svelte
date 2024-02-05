<script>
	import Button from "$components/ui/button/button.svelte";

</script>


<div id="hero" class="pt-20">
  <div class="relative isolate lg:p-8">
    <div class="mx-auto max-w-4xl pt-24 pb-48">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
      <div class="text-center">
        <h1 class="text-4xl max-w-2xl mx-auto font-bold tracking-tight sm:text-6xl"><em class="text-primary">Progressive</em> Web Developer</h1>
        <p class="mt-6 text-lg leading-8">I'm a Web Developer based in sunny southern California, passionate about UX and accessibility specifications. I'm committed to creating performant user-friendly websites, and I look forward to exploring new opportunities to level up my skills.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/contact">Contact Info</Button>
          <a href="/about" class="text-sm font-semibold leading-6 hover:text-primary transition-colors">About me <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #hero {
    background-color: var(--background-drk);
    background-image: linear-gradient(
      to bottom, 
      hsl(var(--background-drk) / 1) 0%, 
      65%, 
      hsl(var(--background-drk) / 1) 85%, 
      hsl(var(--background-drk) / 0) 100%
    ) !important;
  }
</style>
