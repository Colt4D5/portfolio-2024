import type { ScrollEvents } from "lucide-svelte/icons/scroll";

let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	let options
	
  intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], o: IntersectionObserver) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
      const target = entry.target as HTMLElement;
			const hasDataTransition = target.dataset.transition === 'fade-up'
			options = hasDataTransition ? {
				root: null,
				threshold: 0,
				rootMargin: window.innerWidth < 640 ? '0px 0px -400px 0px' : '0px 0px -550px 0px'
			} : {
				root: null,
				threshold: 0.75,
				rootMargin: '0px 0px -200px 0px'
			}
			const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportExit';
			entry.target.dispatchEvent(new CustomEvent(eventName));
			if (entry.isIntersecting) {
				o.unobserve(entry.target)
			}
		});
	}, options);
}

export default function useObserverAction(element: HTMLElement | SVGElement) {
	ensureIntersectionObserver();
	
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}



export function fadeUp(e: CustomEvent) {
	const target = e.target as HTMLElement;
	target.classList.add('is-in-view')
}