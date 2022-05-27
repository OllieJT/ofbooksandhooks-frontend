<script lang="ts">
	export let href: string;
	export let title: string;
	export let cta: string | undefined = undefined;
	export let src: string;
	export let alt: string;
</script>

<div
	class="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto"
>
	<div>
		<div aria-hidden="true" class="absolute inset-0 overflow-hidden rounded-lg">
			<div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
				<img {src} {alt} class="h-full w-full object-cover object-center" />
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
			/>
		</div>
		<div class="absolute inset-0 flex items-end rounded-lg p-6">
			<div>
				{#if cta}
					<p aria-hidden="true" class="text-sm text-white sm:text-base">{cta}</p>
				{/if}
				<h3 class="mt-1 text-2xl font-medium text-white sm:text-3xl">
					<a {href}>
						<span class="absolute inset-0" />
						{title}
					</a>
				</h3>
			</div>
		</div>
	</div>
</div>
