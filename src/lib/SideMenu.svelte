<script lang="ts">
	import {my_store} from '../store';
</script>


<div>
	
	<label>
		<input type=checkbox bind:checked={$my_store}>
		toggle extra object
	</label>
	<button>menu item 2</button>
	<span>{$my_store}</span>
</div>

<style>
	div{
		position: fixed;
		z-index: 10;
	}
</style>
