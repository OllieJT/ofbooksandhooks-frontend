<script lang="ts">
	import CardPartMeta from "./card-part-meta.svelte";

	export let name: string;
	export let avatar: string;
	export let date: Date;
	export let duration: string | undefined;
</script>

<div class="mt-6 flex items-center">
	<div class="flex-shrink-0">
		<span class="sr-only">{name}</span>
		<img class="h-10 w-10 rounded-full" src={avatar} alt="" />
	</div>
	<div class="ml-3">
		<p class="text-sm font-medium text-mono-900">{name}</p>
		<CardPartMeta {date} {duration} />
	</div>
</div>
