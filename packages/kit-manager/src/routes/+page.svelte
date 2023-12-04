<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<title>Home</title>
<h1>[Demo1]Manager SvelteKit App</h1>

Write your own header.

<hr />

<div>{@html data.html}</div>

<hr />

Write your own footer.
