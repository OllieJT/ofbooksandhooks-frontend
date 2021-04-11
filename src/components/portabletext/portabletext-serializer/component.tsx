import { BlockBook } from "../portabletext-blocks-book";
import { BlockHighlight } from "../portabletext-blocks-highlight";
import { BlockGallery } from "../portabletext-blocks-gallery";
import { BlockPeople } from "../portabletext-blocks-people";
import { BlockProducts } from "../portabletext-blocks-products";
import { BlockVideo } from "../portabletext-blocks-video";
import { MarkLink } from "../portabletext-mark-link";
//import { BlockRenderer } from "../portabletext-blockrenderer";
import {
	SerializerBlock_Book,
	SerializerBlock_Gallery,
	SerializerBlock_Highlight,
	SerializerBlock_People,
	SerializerBlock_Products,
	SerializerBlock_Video,
	SerializerMark_LinkInternal,
	SerializerMark_LinkExternal,
	SerializerBlock_Cta,
	SerializerMark_Marker,
	SerializerBlock_Image,
} from "../../../lib/schema-serializer";
import { resolveUrl } from "../../../utility/resolve-url";
import { handleThemeColor } from "../../../utility/handle-theme-color";
import { BlockCta } from "../portabletext-blocks-cta";
import { BlockImage } from "../portabletext-blocks-img";

export const serializers = {
	types: {
		//block: BlockRenderer,
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
				theme={handleThemeColor(node.theme)}
				type={node.type}
			/>
		),
		gallery: ({ node }: SerializerBlock_Gallery) => (
			<BlockGallery title={node.title} images={node.images} />
		),
		img: ({ node }: SerializerBlock_Image) => <BlockImage img={node} />,
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
		cta: ({ node }: SerializerBlock_Cta) => (
			<BlockCta
				title={node.title}
				size={node.size}
				url={node.url}
				label={node.label}
			/>
		),
	},
	marks: {
		linkInternal: ({ children, mark }: SerializerMark_LinkInternal) => (
			<MarkLink
				url={resolveUrl({
					type: mark.reference._type,
					slug: "",
				})}
			>
				{console.log({ mark: mark.reference })}
				{children}
			</MarkLink>
		),
		linkExternal: ({ children, mark }: SerializerMark_LinkExternal) => (
			<MarkLink url={mark.url}>{children}</MarkLink>
		),
		marker: ({ children }: SerializerMark_Marker) => <mark>{children}</mark>,
	},

	// container: (props: { children: any[] }) => {console.log({ container: props });return props.children;},
	// markFallback: (props: { children: any[] }) => {console.log({ markFallback: props });return props.children;},
};
