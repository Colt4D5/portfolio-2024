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
      position = {
        x: 0,
        y: 0,
        origX: 0,
        origY: 0,
      };
      radius;
      constructor({ x, y, radius }: {x: number, y: number, radius: number}) {
        this.position.x = x;
        this.position.y = y;
        this.position.origX = x;
        this.position.origY = y;
        this.radius = radius;
      }
      update() {
        const xDist = this.position.x - mouse.x;
        const yDist = this.position.y - mouse.y;
        const distance = Math.sqrt(xDist**2 + yDist**2);
        const angle = Math.atan2(yDist, xDist);
        const origXDist = this.position.origX - this.position.x;
        const origYDist = this.position.origY - this.position.y;
        const origDistance = Math.sqrt(origXDist**2 + origYDist**2);
        const origAngle = Math.atan2(origYDist, origXDist);
        if (distance < 200) {
          this.radius = Math.abs(200 - distance) * 0.01 + 1;
          if (origDistance < 40) {
            this.position.x += Math.cos(angle) * 0.5;
            this.position.y += Math.sin(angle) * 0.5;
          }
        } else {
          this.position.x += Math.cos(origAngle) * 1.5;
          this.position.y += Math.sin(origAngle) * 1.5;
          this.radius = 1;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
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