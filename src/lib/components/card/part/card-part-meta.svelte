<script lang="ts">
	import { formatDate } from "$lib/util";

	export let date: Date;
	export let duration: string | undefined;

	const datePretty = formatDate.pretty(date);
	const dateHtml = date.toISOString().slice(0, 10);
</script>

<div class="flex space-x-1 text-sm text-mono-500">
	<time datetime={dateHtml}>{datePretty}</time>
	{#if duration}
		<span aria-hidden="true"> &middot;</span>
		<span>{duration} read</span>
	{/if}
</div>
