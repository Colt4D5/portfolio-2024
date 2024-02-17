<script lang="ts">
	import { resizeCanvas } from "$utils/utils";
  import { Particle } from "$components/classes/Particle";
  // import { Canvas } from "$components/classes/Canvas";
	import { browser } from "$app/environment";
	import { onMount } from 'svelte';

  let spacing: number = 50;
  let cvs: HTMLCanvasElement;
  let willAnimate = true;
  let animateCount = 0;
  
  $: mouseIsOnScreen = true
  let canvasIsVisible = false;

  let mouse = {
    x: 0,
    y: 0,
  }

  let particles: Particle[] = [];

  function init(cvs: HTMLCanvasElement) {
    const canvas = cvs;
    document.body.addEventListener('mouseenter', handleMouse);
    document.body.addEventListener('mouseleave', handleMouse);

    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error(`The element of id "background" is not a HTMLCanvasElement. Make sure a <canvas id="background""> element is present in the document.`);
        return;
    }
    const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

    if (browser) {
      setTimeout(() => {
        resizeCanvas(canvas);
        initCanvas(ctx);
        animate(canvas, ctx);
      }, 2000);
    }

    return {
      destroy() {
        particles = [];
        willAnimate = false
      }
    }
  }

  async function animate(cvs: HTMLCanvasElement, c: CanvasRenderingContext2D) {
    c.clearRect(0, 0, cvs.width, cvs.height)

    // console.log(particles.length);

    for (const particle of particles) {
      particle.update(mouseIsOnScreen);
      particle.draw();
    }

    if (willAnimate) {
      if (animateCount === 0) {
        setTimeout(() => {
          requestAnimationFrame(() => animate(cvs, c));
          animateCount++;
        }, 2000);
      } else {
        requestAnimationFrame(() => animate(cvs, c));
        animateCount++;
      }
    }
    canvasIsVisible = true;

    const myPromise: Promise<string> = new Promise((resolve,reject) => {
      resolve("success");
    });

    return myPromise;
  }

  function handleMouse(e: MouseEvent) {
    if (e.type === 'mouseenter') {
      mouseIsOnScreen = true
    } else if (e.type === 'mouseleave') {
      mouseIsOnScreen = false
    } else if (e.type === 'mousemove') {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    }
  }

	let canvasSize = {
    width: 0,
    height: 0
  };

  function initCanvas(ctx: CanvasRenderingContext2D) {
    for (let x = (spacing / 2) * -1; x < window.innerWidth + spacing; x += spacing) {
      for (let y = (spacing / 2) * -1; y < document.body.getBoundingClientRect().height + (spacing * 4); y += spacing) {
        particles.push(new Particle({x, y, radius: 1, mouse, ctx}));
      }
    }
  }

	onMount(() => {
		const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (cvs) {
        const ctx = <CanvasRenderingContext2D> cvs.getContext('2d');
        entries.forEach((entry: ResizeObserverEntry) => {
          const canvas: HTMLCanvasElement = document.querySelector('canvas')!;
          canvasSize = {
            width: entry.contentRect.width,
            height: entry.contentRect.height
          };
          canvas.width = canvasSize.width;
          canvas.height = canvasSize.height;
          particles = [];
          initCanvas(ctx);
        })
      }
		})
		const targetNode = <HTMLBodyElement> document.querySelector("body");
		resizeObserver.observe(targetNode)
	})
</script>

<canvas id="background" bind:this={cvs} use:init class="absolute w-full z-[-1]" class:visible={canvasIsVisible}></canvas>

<!-- <svelte:window on:mousemove={handleMouse} on:resize={() => resizeCanvas(cvs)} /> -->
<svelte:window on:mousemove={handleMouse} />

<style>
  canvas#background {
    opacity: 0;
    transition: opacity 2s ease;
  }
  canvas#background.visible {
    opacity: 1;
  }
</style>