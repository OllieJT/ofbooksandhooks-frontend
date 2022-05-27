<script lang="ts">
	import ImgCover from "$ui/asset/img-cover.svelte";

	export let title: string;
	export let caption: string | undefined = undefined;
	export let images: string[];
	const [img1, img2, img3, img4, img5, img6, img7] = images;
</script>

<div class="relative overflow-hidden">
	<div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
		<div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
			<div class="sm:max-w-lg">
				<h1
					class="font text-4xl font-extrabold tracking-tight text-mono-900 sm:text-6xl"
				>
					{title}
				</h1>
				{#if caption}
					<p class="mt-4 text-xl text-mono-500">
						{caption}
					</p>
				{/if}
			</div>
			<div>
				<div class="mt-10">
					<!-- Decorative image grid -->
					<div
						aria-hidden="true"
						class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
					>
						<div
							class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
						>
							<div class="flex items-center space-x-6 lg:space-x-8">
								<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
									{#if img6}
										<div
											class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
										>
											<ImgCover src={img6} />
										</div>
									{/if}
									{#if img1}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img1} />
										</div>
									{/if}
								</div>
								<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
									{#if img7}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img7} />
										</div>
									{/if}
									{#if img2}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img2} />
										</div>
									{/if}
									{#if img5}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img5} />
										</div>
									{/if}
								</div>
								<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
									{#if img3}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img3} />
										</div>
									{/if}
									{#if img4}
										<div class="h-64 w-44 overflow-hidden rounded-lg">
											<ImgCover src={img4} />
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>

					<a
						href="#"
						class="inline-block rounded-md border border-transparent bg-primary-lighter py-3 px-8 text-center font-medium text-primary-darker ring-0 ring-primary-base transition-all hover:bg-secondary-lighter hover:text-secondary-darker hover:ring-4 hover:ring-secondary-base"
					>
						Summer Collection
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
