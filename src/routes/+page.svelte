<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import AboutMe from '$components/AboutMe.svelte';
	import Performance from '$components/Performance.svelte';
	import History from '$components/History.svelte';
	import Skills from '$components/Skills.svelte';
</script>

<Hero />

<AboutMe />

<Performance />

<History />

<Skills />

<!-- <section class="py-72"></section> -->

<style>
  /* section:nth-child(odd) {
    background: linear-gradient(
      to bottom, 
      hsl(var(--background-drk) / 0), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 0)
    );
  } */
</style>