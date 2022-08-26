<script>
	export let yes = false;
</script>


<div>
	
	<label>
		<input type=checkbox bind:checked={yes}>
		toggle extra object
	</label>
	<button>menu item 2</button>
</div>

<style>
	div{
		position: fixed;
		z-index: 10;
	}
</style>
