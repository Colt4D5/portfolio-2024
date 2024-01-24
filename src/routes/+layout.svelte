<script lang="ts">
	import BgCanvas from '$components/BgCanvas.svelte';
	import '$assets/css/app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<BgCanvas />

<Header />

<main class="container">
  <slot />
</main>
