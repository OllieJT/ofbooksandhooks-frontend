<script lang="ts">
	import type * as Schema from "$lib/api/sanity/schema";
	import PortableText, { type Serializers } from "@portabletext/svelte";
	import Debugger from "$lib/components/blocks/Debugger.svelte";
	import Em from "$lib/components/blocks/mark/em.svelte";
	//import Link from "$lib/components/blocks/mark/link.svelte";
	import Mark from "$lib/components/blocks/mark/mark.svelte";
	import Strong from "$lib/components/blocks/mark/strong.svelte";

	import BlockInlineBook from "$lib/components/blocks/type/inline-book.svelte";
	import BlockInlineCta from "$lib/components/blocks/type/inline-cta.svelte";
	import BlockInlineHighlight from "$lib/components/blocks/type/inline-highlight.svelte";
	import BlockInlineImage from "$lib/components/blocks/type/inline-image.svelte";
	import BlockInlineVideo from "$lib/components/blocks/type/inline-video.svelte";
	import BlockInlinePeople from "$lib/components/blocks/type/inline-people.svelte";
	import BlockInlineGallery from "$lib/components/blocks/type/inline-gallery.svelte";
	// import LinkRef from "$lib/components/blocks/mark/link-ref.svelte";
	import Blockquote from "$lib/components/blocks/styles/blockquote.svelte";
	import Heading from "./styles/heading.svelte";
	import LinkInternal from "./mark/link-internal.svelte";
	import LinkExternal from "./mark/link-external.svelte";

	const serializers: Serializers = {
		types: {
			inline_book: BlockInlineBook,
			inline_cta: BlockInlineCta,
			inline_highlight: BlockInlineHighlight,
			inline_image: BlockInlineImage,
			inline_video: BlockInlineVideo,
			inline_people: BlockInlinePeople,
			inline_gallery: BlockInlineGallery,
		},
		marks: {
			em: Em,
			strong: Strong,
			marker: Mark,
			linkInternal: LinkInternal,
			linkExternal: LinkExternal,

			// link: Link,
			// linkEmail: LinkEmail,
			// refArticle: LinkRef,
			// refTopic: LinkRef,
			// refPage: LinkRef,
		},
		unknownMark: Debugger,
		unknownType: Debugger,

		blockStyles: {
			blockquote: Blockquote,
			h5: Heading,
		},
	};

	export let blocks: Schema.Richtext | Schema.ContentMin;
</script>

<PortableText {blocks} {serializers} />
