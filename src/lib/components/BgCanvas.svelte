<script lang="ts">
	import { resizeCanvas } from "$utils/utils";
  import { Particle } from "$utils/Particle";
  import { Canvas } from "$utils/Canvas";
	import { browser } from "$app/environment";

  let spacing: number = 50;
  let cvs: HTMLCanvasElement;
  let willAnimate = true;
  
  let mouse = {
    x: 0,
    y: 0,
  }

  const particles: Particle[] = [];

  function init(cvs: HTMLCanvasElement) {
    const canvas = cvs;

    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error(`The element of id "background" is not a HTMLCanvasElement. Make sure a <canvas id="background""> element is present in the document.`);
        return;
    }
    const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

    if (browser) {
      resizeCanvas(canvas);
    }

    for (let x = (spacing / 2) * -1; x < window.innerWidth + spacing; x += spacing) {
      for (let y = (spacing / 2) * -1; y < document.body.getBoundingClientRect().height + spacing; y += spacing) {
        particles.push(new Particle({x, y, radius: 1, mouse, ctx}));
      }
    }

    animate(canvas, ctx);

    return {
      destroy() {
        console.log('bye')
        willAnimate = false
      }
    }
  }

  function animate(cvs: HTMLCanvasElement, c: CanvasRenderingContext2D): void {
    c.clearRect(0, 0, cvs.width, cvs.height)

    for (const particle of particles) {
      particle.update();
      particle.draw();
    }

    if (willAnimate) {
      requestAnimationFrame(() => animate(cvs, c));
    }
  }

  function onMouseMove(e: MouseEvent): void {
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY;
  }
</script>

<canvas id="background" bind:this={cvs} use:init class="absolute w-full z-[-1]"></canvas>

<svelte:window on:mousemove={onMouseMove} on:resize={() => resizeCanvas(cvs)} />