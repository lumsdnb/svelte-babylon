<script lang="ts">
	import { my_store, slider } from '../store';
	import Scene1 from '$lib/scenes/scene1.svelte';
	import Walls from '$lib/scenes/SceneWalls.svelte';

	import type { Color3, Vector3 } from 'babylonjs';

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { bounceOut, quadIn } from 'svelte/easing';

	import {
		BabylonEngine,
		BabylonScene,
		BabylonCamera,
		BabylonHemisphericLight,
		BabylonSphere,
		BabylonBox,
		BabylonGround
	} from '$lib/BabylonSvelte';

	let BABYLON: typeof import('babylonjs');

	onMount(async () => {
		const babylonjs = await import('babylonjs');
		BABYLON = babylonjs.default;
	});
</script>

<div class:BABYLON>
	{#if BABYLON}
		<BabylonEngine>
			<BabylonScene>
				<BabylonCamera position={new BABYLON.Vector3(0, 5, -10)} target={BABYLON.Vector3.Zero()} />
				<BabylonHemisphericLight direction={new BABYLON.Vector3(0, 1, 0)} intensity={0.7} />
				<!-- Below is two-way binding between spherePosition and position -->
				{#if $my_store}
					<Scene1 />
					<Walls />
				{/if}

				<BabylonGround options={{ width: 10, height: 5 }} />
			</BabylonScene>
		</BabylonEngine>
	{/if}
</div>
