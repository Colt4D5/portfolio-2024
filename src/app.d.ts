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
		x: number,
		y: number,
		radius: number,
		update: () => void,
		draw: () => void,
	}
}

export {};
