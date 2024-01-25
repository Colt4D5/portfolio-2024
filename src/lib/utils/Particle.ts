export class Particle {
  position = {
    x: 0,
    y: 0,
    origX: 0,
    origY: 0,
  };
  radius;
  ctx;
  mouse;
  constructor({ x, y, radius, mouse, ctx }: {x: number, y: number, radius: number, mouse: MouseController, ctx: CanvasRenderingContext2D }) {
    this.position = { x, y, origX: x, origY: y };
    this.radius = radius;
    this.mouse = mouse
    this.ctx = ctx;
  }
  update() {
    // particle distance from mouse
    const xDist = this.position.x - this.mouse.x;
    const yDist = this.position.y - this.mouse.y;
    const distance = Math.sqrt(xDist**2 + yDist**2);
    const angle = Math.atan2(yDist, xDist);

    // particle distance from original position
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
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#ffffffaa';
    this.ctx.fill();
    this.ctx.closePath();
  }
}