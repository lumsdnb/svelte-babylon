<script lang="ts">
	import type { Scene, Color3 } from 'babylonjs';

	import { setContext, getContext, onMount, onDestroy, tick } from 'svelte';
	import { writable } from 'svelte/store';

	let scene: Scene;
	let sceneStore = writable(scene);
	$: $sceneStore = scene; // eslint-disable-line @typescript-eslint/no-unused-vars

	setContext('BabylonScene', {
		getScene: () => sceneStore
	});

	const { getEngine } = getContext('BabylonEngine');
	const engine = getEngine();

	function renderFunction() {
		scene.render();
	}

	let BABYLON: typeof import('babylonjs');

	$: if (BABYLON && $engine && !scene) {
		scene = new BABYLON.Scene($engine);
		//add signature color to bg
		scene.clearColor = new BABYLON.Color3(0.219, 0.247, 0.317);

		$engine.runRenderLoop(renderFunction);

		const window = $engine.getHostWindow();

		window.addEventListener('resize', () => {
			$engine.resize();
		});

		tick().then(() => {
			$engine.resize();
		});
	}

	onMount(async () => {
		const babylonjs = await import('babylonjs');
		BABYLON = babylonjs.default;
	});

	onDestroy(() => {
		if ($engine && scene) $engine.stopRenderLoop(renderFunction);
	});
</script>

<slot />
