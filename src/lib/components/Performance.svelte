<script lang="ts">
  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
	import type { ScrollEvents } from 'lucide-svelte/icons/scroll';

  let innerW: number;

  const svgs = [
    false, false, false, false
  ]

  function animateProgress(e: CustomEvent) {
    const target = e.target as SVGElement;
    const index = Number(target.dataset.index)
    const delay = innerW < 640 ? 0 : index * 300

    setTimeout(() => {
      svgs[index] = true
    }, delay);
  }
</script>

<section data-transition="fade-up" use:observer on:viewportEnter={fadeUp} id="results">
  <div class="container max-w-7xl mx-auto text-center">
    <h2 id="results-title" class="mb-16">out<theme-color>Perform</theme-color></h2>
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="item mb-0 md:mb-12">
        <div class="progress relative">
          <span class="num font-mono text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">100</span>
          <svg class="opacity-0 my-0 mx-auto w-[100px] h-[100px]" data-index="0" use:observer on:viewportEnter={animateProgress} class:active={svgs[0]}  width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 transition-[stroke-dasharray] duration-700" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"/></g></svg>
        </div>
        <h3 class="my-4 mx-0 text-xl whitespace-nowrap font-normal">Performance</h3>
        <p class="text-sm font-semibold">High-performance websites. Fast load times, optimal user experience.</p>
      </div>
      <div class="item mb-0 md:mb-12">
        <div class="progress relative">
          <span class="num font-mono text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">100</span>
          <svg class="opacity-0 my-0 mx-auto w-[100px] h-[100px]" data-index="1" use:observer on:viewportEnter={animateProgress} class:active={svgs[1]} width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 transition-[stroke-dasharray] duration-700" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"/></g></svg>
        </div>
        <h3 class="my-4 mx-0 text-xl whitespace-nowrap font-normal">Accessibility</h3> 
        <p class="text-sm font-semibold">Inclusive design, using ADA-compliant best practices and accessibility standards.</p>
      </div>
      <div class="item mb-0 md:mb-12">
        <div class="progress relative">
          <span class="num font-mono text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">100</span>
          <svg class="opacity-0 my-0 mx-auto w-[100px] h-[100px]" data-index="2" use:observer on:viewportEnter={animateProgress} class:active={svgs[2]} width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 transition-[stroke-dasharray] duration-700" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"/></g></svg>
        </div>
        <h3 class="my-4 mx-0 text-xl whitespace-nowrap font-normal">Best Practices</h3> 
        <p class="text-sm font-semibold">Clean, organized code to ensure efficient, secure, and easy to maintain websites.</p>
      </div>
      <div class="item mb-0 md:mb-12">
        <div class="progress relative">
          <span class="num font-mono text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">100</span>
          <svg class="opacity-0 my-0 mx-auto w-[100px] h-[100px]" data-index="3" use:observer on:viewportEnter={animateProgress} class:active={svgs[3]} width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 transition-[stroke-dasharray] duration-700" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"/></g></svg>
        </div>
        <h3 class="my-4 mx-0 text-xl whitespace-nowrap font-normal">SEO</h3> 
        <p class="text-sm font-semibold">Improved online visibility and organic traffic utilizing latest best practices in SEO.</p>
      </div>
    </div>
  </div>
</section>

<svelte:window bind:innerWidth={innerW} />

<style lang="postcss">
  #results {
    /* text-align: center; */
    & .container {
      & h2 {
        /* margin-bottom: 4rem; */
      }
      & .flex {
        /* text-align: center; */
        & .item {
          /* margin-bottom: 3rem; */
          @media (width >= 40em) {
            /* margin-bottom: 0; */
          }
          & .progress {
            /* position: relative; */
            & .num {
              /* position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%); */
              /* font-size: 1.75rem; */
              /* font-family: monospace; */
            }
            & svg {
              /* opacity: 0;
              margin: 0 auto; */
              /* width: 100px;
              height: 100px; */
              & path {
                /* transition: stroke-dasharray 0.75s ease-in; */
              }
              &.active {
                opacity: 1;
                & path {
                  stroke-dasharray: 225pt 1000;
                }
              }
            }
          }
          & h3 {
            /* margin: 1rem 0 1rem; */
            /* font-size: 1.25rem; */
            /* font-weight: 400; */
            /* font-family: "Montserrat Alternates", sans-serif; */
            /* white-space: nowrap; */
          }
          & .description {
            /* font-size: 0.9rem;
            line-height: 1.2; */
          }
        }
      }
    }
  }
</style>
