<script lang="ts">
  import { page } from '$app/stores'
	import Button from '$components/ui/button/button.svelte';
	import { onMount } from 'svelte';
  let path: string;

  function getPath(currentPath: string) {
    path = currentPath;
  }

  $: pixels = [] as HTMLDivElement[];
  const gravity = 0.5;

  function explode(e: MouseEvent): void {
    const link = e?.target as HTMLAnchorElement;
    const boundingBox = link?.getBoundingClientRect();
    for (let i = 0; i < 25; i++) {
      const pixelClasses = ['pixel','w-1','h-1','absolute'];
      const pixel: HTMLDivElement = document.createElement('div');
      if (Math.random() <= 0.15) {
        pixelClasses.push('bg-fountain-blue-600');
      } else {
        pixelClasses.push('bg-white');
      }
      pixel.classList.add(...pixelClasses);
      pixel.style.left = `${boundingBox.left + (Math.random() * boundingBox.width)}px`;
      pixel.style.top = `${boundingBox.top + (Math.random() * boundingBox.height)}px`;
      pixel.style.opacity = '1';
      const xVel = Math.trunc(Math.random() * 4 - 2);
      const yVel = Math.trunc(Math.random() * -5 - 2);
      const fade = Math.random() * 0.03 + 0.01;
      pixel.dataset.xVel = `${xVel}`;
      pixel.dataset.yVel = `${yVel}`;
      pixel.dataset.opacity = '1';
      pixel.dataset.fade = `${fade}`;
      pixels.push(pixel);
      document.querySelector('header > nav')?.appendChild(pixel);
    }
    if (!animateIsRunning) {
      animateIsRunning = true;
      animate();
    }
  }

  let animateIsRunning = false;

  async function animate() {
    pixels.forEach((pixel, i) => {
      if (pixel.dataset.yVel) {
        pixel.dataset.yVel = `${+pixel.dataset.yVel + gravity}`;
      }
      const xVel = pixel.dataset.xVel;
      const yVel = pixel.dataset.yVel;
      const fade = pixel.dataset.fade;
      const currPos = {
        x: pixel.getBoundingClientRect().left,
        y: pixel.getBoundingClientRect().top
      }
      if (xVel && yVel && fade) {
        pixel.style.left = `${currPos.x + +xVel}px`;
        pixel.style.top = `${currPos.y + +yVel}px`;
        pixel.style.opacity = `${+pixel.style.opacity - +fade}`;
      }
      if (+pixel.style.opacity <= 0.05) {
        pixels.splice(i, 1);
      }
    })

    const myPromise: Promise<string> = new Promise((resolve,reject) => {
      if (pixels.length) {
        requestAnimationFrame(animate);
      } else {
        animateIsRunning = false;
      }
      resolve("success");
    });

    return myPromise;
  }

  $: getPath($page.url.pathname);

  let scrollY: number;
  let isScrolled = false;

  function handleFixedHeader(): void {
    scrollY = window.scrollY
    isScrolled = scrollY < 50 ? false : true;
  }

  onMount(() => {
    handleFixedHeader();
  })
</script>


<header class="bg-background-drk fixed w-full px-6 py-8 z-20 transition-all duration-300 backdrop-blur" class:is-scrolled={isScrolled}>
  <nav
  class="block w-full">
    <div class="flex items-center justify-between container text-blue-gray-900">
      <a href="/"
        class="mr-4 block cursor-pointer py-1.5 text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
        Colton Arthur Allen
      </a>
      <div class="hidden lg:block">
        <ul class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li class="block p-1 text-sm antialiased font-medium leading-normal text-blue-gray-900">
            <a on:click={explode} href="/" class={`flex items-center transition-colors hover:text-fountain-blue-600${path === '/' ? " active" : ""}`} data-page="home">
              Home
            </a>
          </li>
          <li class="block p-1 text-sm antialiased font-medium leading-normal text-blue-gray-900">
            <a on:click={explode} href="/about" class={`flex items-center transition-colors hover:text-fountain-blue-600${path === '/about' ? " active" : ""}`} data-page="about">
              About
            </a>
          </li>
          <li class="block p-1 text-sm antialiased font-medium leading-normal text-blue-gray-900">
            <a on:click={explode} href="/contact" class={`flex items-center transition-colors hover:text-fountain-blue-600${path === '/contact' ? " active" : ""}`} data-page="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Button class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            aria-hidden="true" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </span>
      </Button>
    </div>
  </nav>

</header>

<svelte:window on:scroll={handleFixedHeader} />

<style>

  header.is-scrolled {
    padding-block: 1rem;
    --tw-backdrop-blur: blur(8px);
    background-color: hsla(var(--background-drk) / 0.75);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  }

  a.active {
    color: hsl(0, 0%, 25%);
  }

  a.active:hover {
    color: hsl(0, 0%, 45%);
  }
</style>
