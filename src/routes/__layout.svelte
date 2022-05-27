<script lang="ts">
	import "../app.css";
	import "@fontsource/sora/400.css";
	import "@fontsource/sora/600.css";
	import "@fontsource/sora/700.css";
	// import Navigation from "$lib/components/common/navigation.svelte";
	import MenuIcon from "@inqling/svelte-icons/solid/view-grid.svelte";
	import UserIcon from "@inqling/svelte-icons/outline/user.svelte";
	import CartIcon from "@inqling/svelte-icons/outline/shopping-cart.svelte";

	// import Instagram from "@inqling/svelte-icons/brand/instagram.svelte";
	// import Etsy from "@inqling/svelte-icons/brand/etsy.svelte";
	// import TikTok from "@inqling/svelte-icons/brand/tiktok.svelte";
	import Logo from "$ui/logo.svelte";

	const year = new Date().getFullYear();

	const menu = ["Women", "Men", "Company", "Stores"];
</script>

<header
	class="flex h-auto w-full flex-row items-stretch justify-between border-b border-mono-200 bg-white"
>
	<div class="flex flex-row divide-x divide-mono-200">
		<a class="flex h-24 w-24 items-center justify-center" href="/">
			<Logo />
		</a>
	</div>

	<div
		class="hidden grow flex-row items-center justify-start border-l border-mono-200 px-6 py-2 text-base tracking-wide text-mono-500 sm:flex"
	>
		<MenuIcon class="h-6 w-6 opacity-50" />
		<span class="px-2 text-mono-500">Explore</span>
	</div>

	<div class="flex flex-row divide-x divide-mono-200 border-l border-mono-200">
		<div class="flex h-24 grow items-center justify-end py-2 px-6" href="/">
			<UserIcon class=" h-6 w-6" />
			<span class="ml-2"> Ollie </span>
		</div>

		<div class="flex h-24 w-24 items-center justify-center" href="/">
			<CartIcon class=" h-6 w-6" />
			<span class="ml-2"> 3 </span>
		</div>
	</div>
</header>

<slot />
