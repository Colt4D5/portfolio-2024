<script lang="ts">
	import '$assets/css/app.css';
	import '$assets/css/fonts.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<!-- <div id="spacer" class="pt-20"></div> -->

<main>
  <slot />
</main>

<Footer />
