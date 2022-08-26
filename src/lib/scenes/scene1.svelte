<script lang="ts">
	import { my_store, slider } from '../../store';

	import type { Color3, Vector3 } from 'babylonjs';

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { bounceOut, quadIn } from 'svelte/easing';

	import { BabylonSphere } from '$lib/BabylonSvelte';

	// Sphere falling
	const fall = {
		duration: 1000,
		easing: bounceOut
	};

	// Sphere rising
	const rise = {
		duration: 2000,
		easing: quadIn
	};

	const t = tweened(4);

	// Chaining a Svelte Tweens to loop infinitely (changing the tween options)
	(function loop() {
		t.set(1, fall).then(() => {
			t.set(4, rise).then(loop);
		});
	})();

	let spherePosition: Vector3;
	$: if (spherePosition) spherePosition.y = $t; // Reactively changing the Babylon sphere's y-position with our Svelte Tween

	let sphereColor: Color3;
	$: if (sphereColor) sphereColor = new BABYLON.Color3($t / 4, 0, 1); // Also reactively changing the Babylon sphere's diffuseColor with our Svelte Tween (lazy example)

	// let BABYLON: typeof import('babylonjs');

	// onMount(async () => {
	// 	const babylonjs = await import('babylonjs');
	// 	BABYLON = babylonjs.default;
	// });
	let slidePosition: Vector3;
</script>

<BabylonSphere
	bind:position={spherePosition}
	bind:diffuseColor={sphereColor}
	options={{ diameter: 2, segments: 32 }}
/>
<!-- <BabylonSphere position={slidePosition} />

<BabylonBox position={new BABYLON.Vector3(3, 0, 3)} options={{ height: 3 }} /> -->
