<script lang="ts">
	import { resizeCanvas } from "$utils/utils";
  import { Particle } from "$components/classes/Particle";
  // import { Canvas } from "$components/classes/Canvas";
	import { browser } from "$app/environment";

  let spacing: number = 50;
  let cvs: HTMLCanvasElement;
  let willAnimate = true;
  
  $: mouseIsOnScreen = true


  let mouse = {
    x: 0,
    y: 0,
  }

  const particles: Particle[] = [];

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
        for (let x = (spacing / 2) * -1; x < window.innerWidth + spacing; x += spacing) {
          for (let y = (spacing / 2) * -1; y < document.body.getBoundingClientRect().height + (spacing * 4); y += spacing) {
            particles.push(new Particle({x, y, radius: 1, mouse, ctx}));
          }
        }
      }, 250);


      setTimeout(() => {
        animate(canvas, ctx);
      }, 250);
    }



    return {
      destroy() {
        willAnimate = false
      }
    }
  }

  function animate(cvs: HTMLCanvasElement, c: CanvasRenderingContext2D): void {
    c.clearRect(0, 0, cvs.width, cvs.height)

    for (const particle of particles) {
      particle.update(mouseIsOnScreen);
      particle.draw();
    }

    if (willAnimate) {
      requestAnimationFrame(() => animate(cvs, c));
    }
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
</script>

<canvas id="background" bind:this={cvs} use:init class="absolute w-full z-[-1]"></canvas>

<svelte:window on:mousemove={handleMouse} on:resize={() => resizeCanvas(cvs)} />