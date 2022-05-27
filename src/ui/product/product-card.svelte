<script lang="ts">
	export let href: string;
	export let title: string;
	export let cost: string;
	export let detail: string | undefined = undefined;
	export let src: string;
	export let alt: string;
</script>

<a {href} class="group">
	<div
		class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3"
	>
		<img
			{src}
			{alt}
			class="h-full w-full object-cover object-center group-hover:opacity-75"
		/>
	</div>
	<div class="mt-4 flex items-center justify-between text-base font-medium text-mono-900">
		<h3>{title}</h3>
		<p>{cost}</p>
	</div>
	<p class="mt-1 text-sm italic text-mono-500">{detail || ""}</p>
</a>
