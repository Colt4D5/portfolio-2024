export class Canvas {
  canvas;
  ctx;
  position;
  size;
  constructor({ position, size, canvas, ctx }: { 
    position: { 
      x: number,
      y: number 
    }, 
    size: { 
      w: number, 
      h: number 
    },
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  }) {
    this.position = {
      x: position.x,
      y: position.y,
    }
    this.size = {
      w: size.w,
      h: size.h,
    }
    this.canvas = canvas
    this.ctx = ctx;
  }
  animate() {
    // console.log('animate');
  }
}