<script lang="ts">
	import { onMount } from "svelte";
  import { Point } from "$components/classes/Point";

  export let width: string;
  export let height: string;
  export let src: string;
  export let alt: string;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const padding = 64;
  let counter = 0;

  onMount(() => {
    ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

    canvas.width = +width + 64 * 2
    canvas.height = +height + 64 * 2

    let pointsArr: Point[] = []
    let completed = false


    function drawCanvas() {
      const offset = 64
      const range = 150
      for (let x = offset; x <= canvas.width - offset; x += 25) {
        if (x === offset || x === canvas.width - offset) {
          for (let y = offset; y <= canvas.height - offset; y += 25) {
            const randomX = (Math.random() * range - (range / 2)) + x;
            const randomY = (Math.random() * range - (range / 2)) + y;
            pointsArr.push(new Point({ x: randomX, y: randomY, origX: x, origY: y, ctx }))
          }
        } else {
            const randomX = (Math.random() * range - (range / 2)) + x;
            const randomYTop = (Math.random() * range - (range / 2)) + offset;
            const randomYBottom = (Math.random() * range - (range / 2)) + canvas.height - offset;
            pointsArr.push(new Point({ x: randomX, y: randomYTop, origX: x, origY: offset, ctx }))
            pointsArr.push(new Point({ x: randomX, y: randomYBottom, origX: x, origY: canvas.height - offset, ctx }))
        }
      }
    }

    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height);

      let pointCount = 0
      for (const [i, point] of Object.entries(pointsArr)) {
        point.update()
        // point.draw()
        const xD = point.position.origX - point.position.x;
        const yD = point.position.origY - point.position.y;
        const dist = Math.sqrt(xD**2 + yD**2);
        if (dist >= 1) pointCount++
        for (const [j, p] of Object.entries(pointsArr)) {
          if (i != j) {
            const xDist = p.position.origX - point.position.x;
            const yDist = p.position.origY - point.position.y;
            const distance = Math.sqrt(xDist**2 + yDist**2)
            if (distance < 32) {
              const opacity = Math.abs(distance - 40) * 0.025;
              ctx.beginPath();
              ctx.moveTo(p.position.x, p.position.y);
              ctx.lineTo(point.position.x, point.position.y);
              ctx.strokeStyle = `rgb(255 255 255 / ${opacity})`
              ctx.lineWidth = 2
              ctx.stroke();
            }
          }
        }
      }
      if (pointsArr.length > 0 && pointCount === 0) {
        completed = true
        // console.log('Is completed!')
      }
      
      counter++

      if (!completed) {
        requestAnimationFrame(animate)
      }
    }
    animate()

    setTimeout(() => {
      drawCanvas()
    }, 1000)

    // function resizeCanvas() {
    //   canvas.width = window.innerWidth
    //   canvas.height = window.innerHeight
    // }
  });
  
</script>


<div class={`relative`} style={`width: min(100%, ${width}px); height: ${height}px;`}>
  <canvas bind:this={canvas} class={`absolute`} style={`transform: translate(-${padding}px, -${padding}px)`}></canvas>
  <img class={`img object-cover`} {src} {alt} style={`width: 100%; height: 100%;`} loading="lazy" />
</div>
