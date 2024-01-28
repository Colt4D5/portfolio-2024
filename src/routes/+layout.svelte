<script lang="ts">
	import BgCanvas from '$components/BgCanvas.svelte';
	import '$assets/css/app.css';
	import '$assets/css/fonts.css';
	import Header from '$lib/components/Header.svelte';
</script>

<BgCanvas />

<Header />

<main>
  <slot />
</main>
