<script lang="ts">
	import {my_store, slider} from '../store';
</script>


<div>
	
	<label>
		<input type=checkbox bind:checked={$my_store}>
		toggle extra object
		<input type="range" bind:value="{$slider}" name="" id="" min="-1" max="1" step="0.01">
	</label>
	<button>menu item 2</button>
	<span>{$slider}</span>
</div>

<style>
	div{
		position: fixed;
		z-index: 10;
		background-color: #232323;
		color: #EEE;
		padding: 1rem;
	}
</style>
