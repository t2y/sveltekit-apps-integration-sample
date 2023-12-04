<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<title>Home</title>
<h1>Manager SvelteKit App</h1>

ここにヘッダーを書く

<hr />

<div>{@html data.html}</div>

<hr />

ここにフッターを書く
