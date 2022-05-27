<script lang="ts">
	import CategoryCard from "$ui/category/category-card.svelte";
	import type { CategoryListItem } from "$ui/category/types";

	interface Button {
		label: string;
		href: string;
	}

	export let title: string;
	export let button: Button | undefined = undefined;
	export let src: string | undefined = undefined;
	export let categories: CategoryListItem[];
</script>

<div class="pattern relative">
	<!-- Background image and overlap -->
	<div aria-hidden="true" class="absolute inset-0 hidden sm:flex sm:flex-col">
		<div class="relative w-full flex-1 bg-secondary-darker/5">
			<div class="absolute inset-0 overflow-hidden">
				{#if src}
					<img {src} alt="" class="h-full w-full object-cover object-center" />
				{/if}
			</div>
			<div class="absolute inset-0 bg-secondary-darker/5 opacity-50" />
		</div>
		<div class="h-32 w-full bg-white md:h-40 lg:h-48" />
	</div>

	<div class="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
		<!-- Background image and overlap -->
		<div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
			<div class="relative w-full flex-1 bg-secondary-darker/5">
				<div class="absolute inset-0 overflow-hidden">
					{#if src}
						<img {src} alt="" class="h-full w-full object-cover object-center" />
					{/if}
				</div>
				<div class="absolute inset-0 bg-secondary-darker/5 opacity-50" />
			</div>
			<div class="h-48 w-full bg-white" />
		</div>
		<div class="relative py-24">
			<h2
				class="inline-block rounded bg-white px-5 py-3 text-4xl font-semibold tracking-tight text-secondary-darker sm:text-5xl"
			>
				{title}
			</h2>
			{#if button}
				<div class="mt-4 sm:mt-6">
					<a
						href={button.href}
						class="inline-block rounded-md border border-transparent bg-white py-3 px-8 font-medium text-mono-600 hover:bg-primary-lighter hover:text-primary-darker"
					>
						{button.label}
					</a>
				</div>
			{/if}
		</div>
	</div>

	<section aria-labelledby="collection-heading" class="relative -mt-96 sm:mt-0">
		<h2 id="collection-heading" class="sr-only">Categories</h2>
		<div
			class="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8"
		>
			{#each categories as category}
				<CategoryCard {...category} />
			{/each}
		</div>
	</section>
</div>
