import DefaultIcon from "@inqling/svelte-icons/outline/globe.svelte";
import Brand from "@inqling/svelte-icons/solid/star.svelte";
import Google from "@inqling/svelte-icons/brand/google.svelte";
import Instagram from "@inqling/svelte-icons/brand/instagram.svelte";
import Etsy from "@inqling/svelte-icons/brand/etsy.svelte";
import Tiktok from "@inqling/svelte-icons/brand/tiktok.svelte";
import Twitter from "@inqling/svelte-icons/brand/twitter.svelte";

function extractSiteName(url: URL) {
	const parts = url.hostname
		.replace("https://", "")
		.replace("http://", "")
		.replace("www.", "")
		.split(".");

	if (parts.length >= 2) {
		return parts[parts.length - 2];
	} else {
		return parts[0];
	}
}

export function iconFromUrl(u: string): ICON {
	const url = u && new URL(u);
	if (!url) return DefaultIcon;
	else {
		const siteName = extractSiteName(url);
		console.log(siteName);
		switch (siteName) {
			case "goo":
				return Google;
			case "instagram":
				return Instagram;
			case "etsy":
				return Etsy;
			case "tiktok":
				return Tiktok;
			case "twitter":
				return Twitter;
			case "localhost":
			case "ofbooksandhooks":
				return Brand;
			default:
				return DefaultIcon;
		}
	}
}
