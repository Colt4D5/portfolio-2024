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
}

export {};
