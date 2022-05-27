<script lang="ts" context="module">
	export const load: Load = async () => {
		return {
			props: {},
		};
	};
</script>

<script lang="ts">
	import HeroCategories from "$ui/hero/hero-categories.svelte";

	import HeroCollection from "$ui/hero/hero-collection.svelte";
	import ProductList from "$ui/product/product-list.svelte";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo title="Homepage" />

<HeroCollection
	title="Summer styles are finally here"
	caption="This season, my new summer collections feature a variety of patterns for
	both formal and informal occasions."
	images={[
		"https://i.etsystatic.com/28522050/r/il/05390d/3246755773/il_794xN.3246755773_pwkq.jpg",
		"https://i.etsystatic.com/28522050/r/il/3c9276/3199052960/il_794xN.3199052960_oedo.jpg",
		"https://i.etsystatic.com/28522050/r/il/2736da/3246756033/il_794xN.3246756033_qgve.jpg",
		"https://i.etsystatic.com/28522050/r/il/456d56/3246756135/il_794xN.3246756135_acrp.jpg",
		"https://i.etsystatic.com/28522050/r/il/580431/3199052882/il_794xN.3199052882_fcsn.jpg",
		"https://i.etsystatic.com/28522050/r/il/d38935/3246756803/il_794xN.3246756803_3p2w.jpg",
		"https://i.etsystatic.com/28522050/r/il/254f91/3246757667/il_794xN.3246757667_9oz2.jpg",
	]}
/>

<HeroCategories
	title="Shop by Category"
	categories={[
		{
			title: "Summer Collection",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/5f96b0/2956261276/il_794xN.2956261276_f5au.jpg",
			alt: "Summer Collection",
		},
		{
			title: "Crochet Face Scrubbies",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/9c3977/2956112458/il_794xN.2956112458_nuov.jpg",
			alt: "Summer Collection",
			cta: "Make it yourself!",
		},
		{
			title: "Valentine's earrings",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/76f05b/3658017395/il_794xN.3658017395_phzr.jpg",
			alt: "Summer Collection",
		},
	]}
/>

<ProductList
	title="Newest products"
	products={[
		{
			title: "Summer Collection",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/5f96b0/2956261276/il_794xN.2956261276_f5au.jpg",
			alt: "Summer Collection",
			cost: "29.99",
		},
		{
			title: "Good Boy Sticker",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/66a5ba/3022806263/il_794xN.3022806263_ldh6.jpg",
			alt: "Summer Collection",
			cost: "10.20",
		},
		{
			title: "Suprise pack",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/f6d170/2956261438/il_794xN.2956261438_h227.jpg",
			alt: "Summer Collection",
			cost: "5.99",
			detail: "A collection of stickers and a suprise items.",
		},
		{
			title: "Crochet Face Scrubbies",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/9c3977/2956112458/il_794xN.2956112458_nuov.jpg",
			alt: "Summer Collection",
			cost: "3.99",
			detail: "Eco-Friendly Reusable Face Scrubbies.",
		},
		{
			title: "Valentine's earrings",
			href: "/",
			src: "https://i.etsystatic.com/28522050/r/il/76f05b/3658017395/il_794xN.3658017395_phzr.jpg",
			alt: "Summer Collection",
			cost: "6.53",
		},
	]}
/>
