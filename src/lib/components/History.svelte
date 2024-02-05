<script lang="ts">
  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
  import { blueprintIcon, graduateIcon, locationIcon, openDoorIcon, robotIcon, rocketIcon } from '$assets/svg/svgs';
    
  const iconMap: string[] = [
    graduateIcon,
    rocketIcon,
    robotIcon,
    openDoorIcon,
    blueprintIcon,
    locationIcon,
]
</script>

<section data-transition="fade-up" use:observer on:viewportEnter={fadeUp} id="history" class="mb-16">
  <h2 class="mb-16 text-3xl font-semibold text-center">my<span class="text-primary">Journey</span></h2>
  <div class="flex justify-center max-w-7xl mx-auto">
    <div class="timeline relative flex flex-col gap-12">
      {#each [6, 5, 4, 3, 2, 1] as index}
        <div class="event event-{index} w-14 h-14 bg-primary mb-8 relative rounded-full shadow-none transition-shadow duration-500 flex justify-center items-center">
          {@html iconMap[index - 1]}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .event:hover {
    box-shadow: 0 0 18px hsl(var(--primary) / 0.7);
  }

  .event:hover::after {
    text-decoration: underline;
    text-decoration-color: var(--primary);
    text-shadow: 0 0 12px hsl(var(--primary) / 0.5);
    font-size: 1.15rem;
  }

  .timeline::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    border: 1px solid #fff;
    height: calc(100% - 2rem);
    width: 1px;
  }

  .event::before, .event::after {
    position: absolute;
    font-weight: 400;
    font-size: 1rem;
    transition: font-size 0.5s ease,
                scale 0.5s ease;
  }

  .event::after {
    white-space: nowrap;
  }
  .event::before {
    border: 1px solid #fff;
    border-radius: 0.25rem;
    background-color: hsl(var(--background-drk) / 0.5);
    min-width: 400px;
    padding: 0.5rem;
  }

  .event:hover::before {
    scale: 1.05;
  }

  .event.event-6::after {
    content: 'May 2023';
  }
  .event.event-6::before {
    content: "Started employment at Convention Data Services as Web Developer";
  }

  .event.event-5::after {
    content: 'October 2022';
  }
  .event.event-5::before {
    content: "Completed rebuild of client site starter template, increasing performance, SEO metrics, and ADA compliance levels across the board";
  }

  .event.event-4::after {
    content: 'August 2022';
  }
  .event.event-4::before {
    content: "Started as Freelance Web Developer at Open Doors USA building a proof-of-concept React video page in a WordPress install";
  }
  
  .event.event-3::after {
    content: 'July 2022';
  }
  .event.event-3::before {
    content: "Built and deployed Pingbot 3000 on AWS that can notify the web team for client site outages, reducing help tickets by > 70%";
  }
  
  .event.event-2::after {
    content: 'June 2021';
  }
  .event.event-2::before {
    content: "Started employment at Imaginal Marketing Group as Frontend Web Developer";
  }

  .event.event-1::after {
    content: 'June 2020';
  }
  .event.event-1::before {
    content: "2021: Completed Jonas Schmedtmann's 70-hour Complete JavaScript Course: From Zero to Expert";
  }

  .event:nth-child(even)::after,
  .event:nth-child(odd)::before {
    top: 50%;
    left: 100%;
    right: auto;
    transform: translate3d(3rem, -50%, 0);
  }
  .event:nth-child(odd)::after,
  .event:nth-child(even)::before {
    top: 50%;
    left: auto;
    right: 100%;
    transform: translate3d(-3rem, -50%, 0)
  }
</style>
