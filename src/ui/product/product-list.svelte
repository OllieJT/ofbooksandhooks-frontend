<script lang="ts">
	import ProductCard from "./product-card.svelte";
	import type { ProductListItem } from "./types";

	export let title: string | undefined = undefined;
	export let products: ProductListItem[];
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		{#if title}
			<h2
				id="products-heading"
				class="mb-6 text-2xl font-semibold tracking-tight text-mono-900 sm:text-4xl"
			>
				{title}
			</h2>
		{/if}

		<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			{#each products as product}
				<ProductCard {...product} />
			{/each}
		</div>
	</div>
</div>
