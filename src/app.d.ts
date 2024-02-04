// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type Particle = {
		position: {
			x: number,
			y: number,
			origX: number,
			origY: number,
		}
		radius: number,
		ctx: CanvasRenderingContext2D,
		mouse: MouseController,
		update: (mouseIsOnScreen: boolean) => void,
		draw: () => void,
	}

	type Point = {
		position: {
			x: number,
			y: number,
			origX: number,
			origY: number,
		}
		size: {
			r: number,
		}
		delay: number,
		counter: number,
		ctx: CanvasRenderingContext2D,
		update: () => void,
		draw: () => void,
	}

	type Canvas = {
		position: {
			x: number,
			y: number,
		}
		size: {
			w: number,
			h: number,
		}
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		animate: () => void,
	}

	type MouseController = {
		x: number,
		y: number,
	}

  namespace svelteHTML {
    interface HTMLAttributes<T> {
      'on:viewportEnter'?: (event: CustomEvent) => void
      'on:viewportExit'?: (event: CustomEvent) => void
    }
    interface SVGAttributes<T> {
      'on:viewportEnter'?: (event: CustomEvent) => void
      'on:viewportExit'?: (event: CustomEvent) => void
    }
  }
}

export {};
