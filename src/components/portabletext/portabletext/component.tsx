import { createPortableTextComponent } from "next-sanity";
import { BlockBook } from "../../portabletext/portabletext-blocks-book";
import { BlockHighlight } from "../portabletext-blocks-highlight";
import { BlockGallery } from "../portabletext-blocks-gallery";
import { BlockPeople } from "../portabletext-blocks-people";
import { BlockProducts } from "../portabletext-blocks-products";
import { BlockVideo } from "../portabletext-blocks-video";
import { MarkLink } from "../portabletext-mark-link";
import { BlockRenderer } from "../../portabletext/portabletext-blockrenderer";
//@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import {
	SerializerBlock_Book,
	SerializerBlock_Gallery,
	SerializerBlock_Highlight,
	SerializerBlock_People,
	SerializerBlock_Products,
	SerializerBlock_Video,
	SerializerMark_LinkInternal,
	SerializerMark_LinkExternal,
} from "../../../lib/schema-serializer";
import { resolveUrl } from "../../../utility/resolve-url";
import { handleThemeColor } from "../../../utility/handle-theme-color";

export const PortableText = createPortableTextComponent({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: {
		types: {
			block: BlockRenderer,
			book: ({ node }: SerializerBlock_Book) => (
				<BlockBook
					title={node.title}
					type={node.type}
					authors={node.authors}
					cover={node.cover}
					genre={node.genre}
					content={node.content}
					isbn={node.isbn}
					narrators={node.narrators}
					releaseDate={node.releaseDate}
					subtitle={node.subtitle}
				/>
			),
			highlight: ({ node }: SerializerBlock_Highlight) => (
				<BlockHighlight
					content={node.content}
					title={node.title}
					theme={handleThemeColor(node.color)}
					type={node.type}
				/>
			),
			gallery: ({ node }: SerializerBlock_Gallery) => (
				<BlockGallery title={node.title} images={node.images} />
			),
			people: ({ node }: SerializerBlock_People) => (
				<BlockPeople title={node.title} people={node.people} />
			),
			products: ({ node }: SerializerBlock_Products) => (
				<BlockProducts title={node.title} products={node.products} />
			),
			video: ({ node }: SerializerBlock_Video) => (
				<BlockVideo
					href={node.href}
					hasControls={node.hasControls}
					isAutoplay={node.isAutoplay}
					isLoop={node.isLoop}
					isMuted={node.isMuted}
				/>
			),
		},
		marks: {
			linkInternal: ({ children, mark }: SerializerMark_LinkInternal) => (
				<MarkLink url={resolveUrl(mark.reference)}>{children}</MarkLink>
			),
			linkExternal: ({ children, mark }: SerializerMark_LinkExternal) => (
				<MarkLink url={mark.url}>{children}</MarkLink>
			),
		},

		container: (props: { children: any[] }) => {
			console.log({ container: props });
			return props.children;
		},

		markFallback: (props: { children: any[] }) => {
			console.log({ markFallback: props });
			return props.children;
		},
	},
});
