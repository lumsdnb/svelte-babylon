<script lang="ts">
	import { my_store, slider } from '../store';
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={$my_store} />
		toggle extra object
		<input type="range" bind:value={$slider} name="" id="" min="-1" max="1" step="0.01" />
	</label>
	<span>{$slider}</span>
</div>

<style>
	div {
		position: relative;
		top: 2rem;
		z-index: 10;
		background-color: #232323;
		color: #eee;
		padding: 1rem;
		margin: 0.5rem 0.8rem;
		border-radius: 0.3rem;
	}
</style>
