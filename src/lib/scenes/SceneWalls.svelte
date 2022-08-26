<script lang="ts">
	import { my_store, slider } from '../../store';

	import { BabylonBox } from '$lib/BabylonSvelte';
	import { Color3, Vector3 } from 'babylonjs';

	import { onMount } from 'svelte';
</script>

<BabylonBox position={new Vector3(0, 1, 2.5)} options={{ width: 10, height: 5 }} />
<BabylonBox
	position={new Vector3(5, 1, 0)}
	rotation={new Vector3(0, Math.PI / 2, 0)}
	options={{ width: 5, height: 5 }}
/>
