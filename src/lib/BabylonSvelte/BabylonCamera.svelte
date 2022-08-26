<script lang="ts">
	import type { ArcRotateCamera, Vector3 } from 'babylonjs';

	import { getContext, onMount, onDestroy } from 'svelte';

	const { getScene } = getContext('BabylonScene');
	const scene = getScene();

	let camera: ArcRotateCamera;

	export let name: string = null;
	$: if (name && camera) camera.name = name;

	export let position: Vector3 = null;
	$: if (position && camera) camera.position = position;

	export let target: Vector3 = null;
	$: if (target && camera) camera.setTarget(target);

	let BABYLON: typeof import('babylonjs');

	$: if (BABYLON && $scene && !camera) {
		if (!name) name = '';
		if (!position) position = new BABYLON.Vector3(0, 0, 0);
		if (!target) target = new BABYLON.Vector3(0, 0, 0);

		camera = new BABYLON.ArcRotateCamera(
			'Camera',
			(3 * Math.PI) / 2,
			-Math.PI / 2,
			50,
			BABYLON.Vector3.Zero(),
			$scene
		);
		camera.lowerAlphaLimit = Math.PI * 0.9;
		camera.upperAlphaLimit = Math.PI * 1.9;
		camera.lowerRadiusLimit = 5;
		camera.upperRadiusLimit = 18;
		const canvas = $scene.getEngine().getRenderingCanvas();
		camera.attachControl(canvas, true);
	}

	onMount(async () => {
		const babylonjs = await import('babylonjs');
		BABYLON = babylonjs.default;
	});

	onDestroy(() => {
		if ($scene && camera) $scene.removeCamera(camera);
	});
</script>

<slot />
