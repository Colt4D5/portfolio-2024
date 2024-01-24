<script lang="ts">
	import { resizeCanvas } from "$utils/utils";

  let spacing: number = 50;
  let cvs: HTMLCanvasElement;
  let willAnimate = true;
  
  let mouse = {
    x: 0,
    y: 0
  }

  const particles: Particle[] = [];

  function init(cvs: HTMLCanvasElement) {
    const canvas = cvs;

    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error(`The element of id "background" is not a HTMLCanvasElement. Make sure a <canvas id="background""> element is present in the document.`);
        return;
    }
    const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

    resizeCanvas(canvas);

    class Particle {
      x: number;
      y: number;
      radius: number
      constructor({ x, y, radius }: {x: number, y: number, radius: number}) {
        this.x = x;
        this.y = y;
        this.radius = radius;
      }
      update() {
        const xDist = this.x - mouse.x;
        const yDist = this.y - mouse.y;
        const distance = Math.sqrt(xDist**2 + yDist**2);
        if (distance < 200) {
          this.radius = Math.abs(200 - distance) * 0.02 + 1;
        } else {
          this.radius = 1;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffffaa';
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let x = (spacing / 2) * -1; x < window.innerWidth + spacing; x += spacing) {
      for (let y = (spacing / 2) * -1; y < document.body.getBoundingClientRect().height + spacing; y += spacing) {
        particles.push(new Particle({x, y, radius: 1}));
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
    mouse.y = e.clientY;
  }
</script>

<canvas id="background" bind:this={cvs} use:init class="absolute w-full h-full z-[-1]"></canvas>

<svelte:window on:mousemove={onMouseMove} on:resize={() => resizeCanvas(cvs)} />