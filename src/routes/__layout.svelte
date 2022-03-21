<script lang="ts">
	import "../app.css";
	import "@fontsource/sen/400.css";
	import "@fontsource/sen/700.css";
	import "@fontsource/sen/800.css";
	import Navigation from "$lib/components/common/navigation.svelte";
	import Instagram from "@inqling/svelte-icons/brand/instagram.svelte";
	import Etsy from "@inqling/svelte-icons/brand/etsy.svelte";
	import TikTok from "@inqling/svelte-icons/brand/tiktok.svelte";

	const year = new Date().getFullYear();
</script>

<Navigation />

<slot />

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="mt-auto border-t border-mono-200 bg-white">
	<div
		class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		<div class="flex justify-center space-x-6 md:order-2">
			<a
				href="https://www.instagram.com/ofbooksandhooks/"
				class="text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">Instagram</span>
				<Instagram class="h-6 w-6" />
			</a>

			<a
				href="https://www.etsy.com/shop/OfBooksAndHooksUK"
				class="text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">Etsy</span>
				<Etsy class="h-6 w-6" />
			</a>
			<a
				href="https://vm.tiktok.com/ZMLacvxNq/"
				class="text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">TikTok</span>
				<TikTok class="h-6 w-6" />
			</a>
		</div>
		<div class="mt-8 md:order-1 md:mt-0">
			<p class="text-center text-base text-gray-400">
				&copy; {year} Of Books & Hooks. All rights reserved.
			</p>
		</div>
	</div>
</footer>
