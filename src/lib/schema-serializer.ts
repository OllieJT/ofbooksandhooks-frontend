import {
	Book,
	Gallery,
	Highlight,
	LinkExternal,
	LinkInternal,
	People,
	Products,
	Video,
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

export type SerializerBlock_Book = PortableTextType<Book>;
export type SerializerBlock_Gallery = PortableTextType<Gallery>;
export type SerializerBlock_Highlight = PortableTextType<Highlight>;
export type SerializerBlock_People = PortableTextType<People>;
export type SerializerBlock_Products = PortableTextType<Products>;
export type SerializerBlock_Video = PortableTextType<Video>;

export type SerializerMark_LinkInternal = PortableTextMark<LinkInternal>;
export type SerializerMark_LinkExternal = PortableTextMark<LinkExternal>;
