<script lang="ts">
	import type { Color3, Mesh, StandardMaterial, Vector3 } from 'babylonjs';

	import { getContext, onMount, onDestroy } from 'svelte';

	const { getScene } = getContext('BabylonScene');
	const scene = getScene();

	let box: Mesh;
	let material: StandardMaterial;
	$: if (box && material) box.material = material;

	export let name: string = null;

	export let options: Record<string, unknown> = null;

	export let position: Vector3 = null;
	$: if (box) box.position = position;

	export let diffuseColor: Color3 = null;
	$: if (material) material.diffuseColor = diffuseColor;

	let BABYLON: typeof import('babylonjs');

	$: if (BABYLON && $scene && !box) {
		if (!name) name = '';
		if (!options) options = {};
		if (!position) position = new BABYLON.Vector3(0, 0, 0);
		if (!diffuseColor) diffuseColor = new BABYLON.Color3(1, 1, 1);

		box = BABYLON.MeshBuilder.CreateBox(name, options, $scene);
		material = new BABYLON.StandardMaterial(name, $scene);
	}

	onMount(async () => {
		const babylonjs = await import('babylonjs');
		BABYLON = babylonjs.default;
	});

	onDestroy(() => {
		if ($scene && box) $scene.removeMesh(box);
	});
</script>

<slot />
