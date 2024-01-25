export const resizeCanvas = (cvs: HTMLCanvasElement): void => {
  cvs.width = window.innerWidth;
  cvs.height = document.body.scrollHeight;
}