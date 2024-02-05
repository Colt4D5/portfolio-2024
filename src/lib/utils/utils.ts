export const resizeCanvas = (cvs: HTMLCanvasElement): void => {
  cvs.width = window.innerWidth;
  const body = document.body;
  const html = document.documentElement;
  cvs.height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
}