import type {
	LinkExternal,
	LinkInternal,
	//Products,
	InlineBook,
	InlineCta,
	InlineGallery,
	InlineHighlight,
	InlineImage,
	InlinePeople,
	InlineVideo,
} from "./schema";

interface PortableTextType<T> {
	children: [];
	isInline?: undefined;
	node: T;
	options: {
		dataset: string;
		projectId: string;
		imageOptions: {};
	};
}

interface PortableTextMark<M> {
	children: string[];
	mark: M;
	markKey: string;
	_key: string;
	_type: string;
}

export type SerializerBlock_Block = PortableTextType<{
	children: any[];
	markDefs: any[];
	style: string;
	_key: string;
	_type: "block";
}>;
export type SerializerBlock_Book = PortableTextType<InlineBook>;
export type SerializerBlock_Gallery = PortableTextType<InlineGallery>;
export type SerializerBlock_Image = PortableTextType<InlineImage>;
export type SerializerBlock_Highlight = PortableTextType<InlineHighlight>;
export type SerializerBlock_People = PortableTextType<InlinePeople>;
export type SerializerBlock_Video = PortableTextType<InlineVideo>;
export type SerializerBlock_Cta = PortableTextType<InlineCta>;

export type SerializerMark_LinkInternal = PortableTextMark<LinkInternal>;
export type SerializerMark_LinkExternal = PortableTextMark<LinkExternal>;
export type SerializerMark_Marker = PortableTextMark<"marker">;
