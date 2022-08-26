<script lang="ts">
	import Scene from '$lib/BabylonMain.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
</script>

<div>
	<h1>hello</h1>
	<p>heres some content. try to load babylonjs from here</p>
</div>

<Scene />
<SideMenu />

<style>
	div {
		font-size: 1.2rem;
		position: fixed;
		z-index: 15;
		color: #eee;
		padding: 1rem;
		margin: 0.5rem 0.8rem;
		border-radius: 0.3rem;
		filter: drop-shadow(4px 2px 1px #0f0f0f);
	}
</style>
