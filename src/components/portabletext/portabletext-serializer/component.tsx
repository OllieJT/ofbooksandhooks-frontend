import { BlockBook } from "../block-book";
import { BlockHighlight } from "../block-highlight";
import { BlockGallery } from "../block-gallery";
import { BlockPeople } from "../block-people";
import { BlockProducts } from "../block-products";
import { BlockVideo } from "../block-video";
import { MarkLink } from "../mark-link";
//import { BlockRenderer } from "../portabletext-blockrenderer";
import type {
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
} from "@lib/groq/models";
import { resolveUrl } from "@lib/utility/resolve-url";
import { handleThemeClass } from "@lib/utility/handle-theme-color";
import { BlockCta } from "../block-cta";
import { BlockImage } from "../block-img";

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
				theme={handleThemeClass(node.theme)}
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
			<BlockCta title={node.title} size={node.size} url={node.url} label={node.label} />
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
