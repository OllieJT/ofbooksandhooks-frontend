<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineVideo } from "$lib/api/sanity/schema";

	function idFromURL(url: string) {
		var regExp =
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return match && match[7].length == 11 ? match[7] : false;
	}

	export let portableText: BlockProps<InlineVideo>;
	$: video = portableText.block;
	$: id = idFromURL(video.href);
	console.log({ video });

	//TODO: Implement additional video options
</script>

<lite-youtube videoid={id} playlabel="Play Video" />
