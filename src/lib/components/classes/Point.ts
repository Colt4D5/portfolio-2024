type PointProps = {
  x: number;
  y: number;
  origX: number;
  origY: number;
  ctx: CanvasRenderingContext2D;
}

export class Point {
  position = {
    x: 0,
    y: 0,
    origX: 0,
    origY: 0
  };
  size = {
    r: 0
  };
  delay;
  counter = 0;
  ctx;

  constructor({ x, y, origX, origY, ctx }: PointProps) {
    this.position = {
      x: x,
      y: y,
      origX: origX,
      origY: origY
    }
    this.size = {
      r: 0
    }
    this.delay = Math.random() * 100 + 100
    this.counter = 0;
    this.ctx = ctx;
  }
  update() {
    if (this.counter > this.delay) {
      const xDist = this.position.origX - this.position.x;
      const yDist = this.position.origY - this.position.y;
      const angle = Math.atan2(yDist, xDist);
      const distance = Math.sqrt(xDist**2 + yDist**2);
      const direction = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      }
      if (distance < 2) {
        this.position.x = this.position.origX;
        this.position.y = this.position.origY;
      } else {
        this.position.x += direction.x * 3;
        this.position.y += direction.y * 3;
      }
      
    }
    this.counter++;
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.position.x, this.position.y, this.size.r, 0, Math.PI * 2)
    this.ctx.fillStyle = '#fff'
    this.ctx.fill()
    this.ctx.closePath()
  }
}