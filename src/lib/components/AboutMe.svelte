<script lang="ts">
  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
  import blob from '$assets/svg/blob.svg?raw'
	import Button from './ui/button/button.svelte';
</script>



<section data-transition="fade-up" use:observer on:viewportEnter={fadeUp} id="about-me" class="text-center">
  <h2 class="mb-16 text-3xl font-semibold">about<span class="text-primary">Me</span></h2>

  <div class="container max-w-7xl mx-auto flex items-center">
    <div class="left flex-1 w-1/2">
      {@html blob}
    </div>
    <div class="right flex-1 w-1/2 relative">
      <h3 class="text-xl mb-6">Colton Arthur Allen</h3>
      <p>Hey there! I'm Colton, a passionate web developer with a knack for turning ideas into interactive and visually appealing websites. Ever since I began my quest into web development I've been immersed in crafting seamless digital experiences.</p>

      <h4>Why me?</h4>

      <p>I thrive on tackling coding challenges and creating user-friendly interfaces. With a focus on clean code and innovative solutions, I bring a blend of technical expertise and creative flair to every project.</p>

      <h4>Let's <span class="text-primary">Work</span> Together</h4>

      <p>If you're looking for a web developer who's forward thinking and who gets excited building top-notch web applications and websites then I'm your guy. Please click the button below to get in contact with me.</p>

      <p><Button>Contact me</Button></p>
    </div>
  </div>
</section>

<style>
  .right::before {
    content: '';
    width: calc(100% + 3rem);
    aspect-ratio: 1 / 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: radial-gradient(hsl(var(--background-drk)), hsl(var(--background-drk)), hsl(var(--background-drk)), hsl(var(--background-drk) / 0), hsl(var(--background-drk) / 0));
    z-index: -1;
  }
</style>
