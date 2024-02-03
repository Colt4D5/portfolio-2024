<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import ShakyImg from '$lib/components/ShakyImg.svelte';
  const src = 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>


<Hero />

<section class="flex justify-center gap-24">
  <ShakyImg width={600} height={400} {src} alt={'Space'} />
</section>

<section class="py-72"></section>

<section class="py-72"></section>

<section class="py-72"></section>

<section class="py-72"></section>

<section class="py-72"></section>

<style>
  section:nth-child(odd) {
    background: linear-gradient(
      to bottom, 
      hsl(var(--background-drk) / 0), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 0)
    );
  }
</style>