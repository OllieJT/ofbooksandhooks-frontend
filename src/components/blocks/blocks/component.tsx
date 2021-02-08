import { BlockBook } from "../blocks-book";
import { BlockHighlight } from "../blocks-gallery";
import { BlockGallery } from "../blocks-highlight";
import { BlockPeople } from "../blocks-people";
import { BlockProducts } from "../blocks-products";
import { BlockVideo } from "../blocks-video";
import { MarkLinkExternal, MarkLinkInternal } from "../marks";

export const blocks = {
	types: {
		//block: BlockRenderer,
		book: BlockBook,
		highlight: BlockHighlight,
		gallery: BlockGallery,
		people: BlockPeople,
		products: BlockProducts,
		video: BlockVideo,
	},
	marks: {
		linkInternal: MarkLinkInternal,
		linkExternal: MarkLinkExternal,
	},
};
