import type {
	SanityReference,
	SanityKeyedReference,
	SanityAsset,
	SanityImage,
	SanityFile,
	SanityGeoPoint,
	SanityBlock,
	SanityDocument,
	SanityImageCrop,
	SanityImageHotspot,
	SanityKeyed,
	SanityImageAsset,
	SanityImageMetadata,
	SanityImageDimensions,
	SanityImagePalette,
	SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
	SanityReference,
	SanityKeyedReference,
	SanityAsset,
	SanityImage,
	SanityFile,
	SanityGeoPoint,
	SanityBlock,
	SanityDocument,
	SanityImageCrop,
	SanityImageHotspot,
	SanityKeyed,
	SanityImageAsset,
	SanityImageMetadata,
	SanityImageDimensions,
	SanityImagePalette,
	SanityImagePaletteSwatch,
};

/**
 * Collection
 *
 *
 */
export interface Collection extends SanityDocument {
	_type: "collection";

	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Description — `text`
	 *
	 *
	 */
	description: string;

	/**
	 * Theme Color — `theme`
	 *
	 *
	 */
	theme: Theme;

	/**
	 * URL Slug — `slug`
	 *
	 * This determines the URL path for the page
	 */
	slug: { _type: "slug"; current: string };

	/**
	 * Tags — `tags`
	 *
	 *
	 */
	tags?: Tags;

	/**
	 * Articles Before — `datetime`
	 *
	 * Only show articles before this date
	 */
	before?: string;

	/**
	 * Articles After — `datetime`
	 *
	 * Only show articles after this date
	 */
	after?: string;

	/**
	 * Metadata — `metadata`
	 *
	 *
	 */
	metadata: Metadata;
}

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
	_type: "article";

	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Excerpt — `text`
	 *
	 *
	 */
	excerpt?: string;

	/**
	 * URL Slug — `slug`
	 *
	 * This determines the URL path for the page
	 */
	slug: { _type: "slug"; current: string };

	/**
	 * Call to Action — `button`
	 *
	 *
	 */
	cta?: Button;

	/**
	 * Author — `reference`
	 *
	 *
	 */
	author: SanityReference<Person>;

	/**
	 * Recommended — `array`
	 *
	 *
	 */
	recommended: Array<SanityKeyedReference<Collection | Article>>;

	/**
	 * Article Image — `thumbnail`
	 *
	 *
	 */
	thumbnail: Thumbnail;

	/**
	 * Metadata — `metadata`
	 *
	 *
	 */
	metadata: Metadata;

	/**
	 * Content — `richtext`
	 *
	 *
	 */
	content?: Richtext;

	/**
	 * Tags — `tags`
	 *
	 *
	 */
	tags?: Tags;
}

/**
 * Links Page
 *
 *
 */
export interface Linkpage extends SanityDocument {
	_type: "linkpage";

	/**
	 * Label — `string`
	 *
	 *
	 */
	label?: string;

	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Links — `array`
	 *
	 *
	 */
	links: Array<SanityKeyed<FeaturedLink>>;

	/**
	 * Metadata — `metadata`
	 *
	 *
	 */
	metadata: Metadata;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
	_type: "person";

	/**
	 * First Name — `string`
	 *
	 *
	 */
	nameFirst: string;

	/**
	 * Last Name — `string`
	 *
	 *
	 */
	nameLast?: string;

	/**
	 * Alias — `string`
	 *
	 * Another name this person is known as.
	 */
	alias: string;

	/**
	 * URL Slug — `slug`
	 *
	 * This determines the URL path for the page
	 */
	slug: { _type: "slug"; current: string };

	/**
	 * Avatar — `thumbnail`
	 *
	 *
	 */
	avatar?: Thumbnail;

	/**
	 * Bio — `array`
	 *
	 *
	 */
	bio?: Array<SanityKeyed<SanityBlock>>;

	/**
	 * Tags — `tags`
	 *
	 *
	 */
	tags?: Tags;

	/**
	 * Platforms — `array`
	 *
	 *
	 */
	platforms?: Array<SanityKeyed<Platform>>;
}

/**
 * Homepage
 *
 *
 */
export interface Homepage extends SanityDocument {
	_type: "homepage";

	/**
	 * Label — `string`
	 *
	 *
	 */
	label?: string;

	/**
	 * Metadata — `metadata`
	 *
	 *
	 */
	metadata: Metadata;
}

/**
 * Settings
 *
 *
 */
export interface Settings extends SanityDocument {
	_type: "settings";

	/**
	 * Profile — `reference`
	 *
	 *
	 */
	profile: SanityReference<Person>;

	/**
	 * Pinned Links — `array`
	 *
	 *
	 */
	navigation_pinned?: Array<
		SanityKeyed<NavigationLinkInternal> | SanityKeyed<NavigationLinkExternal>
	>;

	/**
	 * Menu Links — `array`
	 *
	 *
	 */
	navigation_menu?: Array<
		SanityKeyed<NavigationLinkInternal> | SanityKeyed<NavigationLinkExternal>
	>;
}

export type LinkExternal = {
	_type: "linkExternal";
	/**
	 * URL — `url`
	 *
	 *
	 */
	url: string;
};

export type LinkInternal = {
	_type: "linkInternal";
	/**
	 * Reference — `reference`
	 *
	 *
	 */
	reference: SanityReference<Article | Collection | Linkpage | Person | Homepage>;
};

export type Theme =
	| "mono"
	| "primary"
	| "secondary"
	| "red"
	| "yellow"
	| "green"
	| "blue"
	| "purple"
	| "pink";

export type Button = {
	_type: "button";
	/**
	 * Button Label — `string`
	 *
	 *
	 */
	label: string;

	/**
	 * URL — `url`
	 *
	 *
	 */
	url: string;
};

export type Thumbnail = {
	_type: "thumbnail";
	asset: SanityReference<SanityImageAsset>;
	crop?: SanityImageCrop;
	hotspot?: SanityImageHotspot;

	/**
	 * Alternate Text — `string`
	 *
	 * Describe this image as if someone couldn't see it.
	 */
	alt?: string;
};

export type Richtext = Array<
	| SanityKeyed<SanityBlock>
	| SanityKeyed<InlineBook>
	| SanityKeyed<InlineCta>
	| SanityKeyed<InlineGallery>
	| SanityKeyed<InlineHighlight>
	| SanityKeyed<InlineImage>
	| SanityKeyed<InlinePeople>
	| SanityKeyed<InlineVideo>
>;

export type ContentMin = Array<SanityKeyed<SanityBlock>>;

export type Metadata = {
	_type: "metadata";
	/**
	 * Page Type — `string`
	 *
	 * What is the primary content type for this page? If you included Profile / Book / Product blocks, the metadata will automatically be added for them.
	 */
	type: "website" | "article" | "profile" | "book";

	/**
	 * Publish Date — `datetime`
	 *
	 * This will be available but hidden on the site until after this date.
	 */
	publishAt: string;

	/**
	 * Page Label — `string`
	 *
	 * This should be very short as it appears in the browser tab.
	 */
	title: string;

	/**
	 * Page Title — `string`
	 *
	 * This is the main title people see on social media and search engines.
	 */
	headline: string;

	/**
	 * Description — `text`
	 *
	 *
	 */
	description?: string;

	/**
	 * Images — `array`
	 *
	 * The first image is used on the site, the rest are used for social media sites that support galleries.
	 */
	thumbnails: Array<SanityKeyed<Thumbnail>>;
};

export type Platform = {
	_type: "platform";
	/**
	 * Username — `string`
	 *
	 *
	 */
	name: string;

	/**
	 * Link — `url`
	 *
	 *
	 */
	link: string;

	/**
	 * Icon — `iconPicker`
	 *
	 *
	 */
	icon?: IconPicker;
};

export type Notice = {
	_type: "notice";
	/**
	 * Label — `string`
	 *
	 *
	 */
	label: string;

	/**
	 * theme — `theme`
	 *
	 *
	 */
	theme?: Theme;
};

export type InlineGallery = {
	_type: "inline_gallery";
	/**
	 * Gallery Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Images — `array`
	 *
	 *
	 */
	images?: Array<SanityKeyed<Thumbnail>>;
};

export type InlineImage = {
	_type: "inline_image";
	asset: SanityReference<SanityImageAsset>;
	crop?: SanityImageCrop;
	hotspot?: SanityImageHotspot;

	/**
	 * Alternate Text — `string`
	 *
	 * Describe this image as if someone couldn't see it.
	 */
	alt?: string;

	/**
	 * Inline — `string`
	 *
	 *
	 */
	float?: "none" | "left" | "right";

	/**
	 * Max Width — `string`
	 *
	 * Restrict the width of the image. This is useful if you want to force a larger image to sit inline next to text.
	 */
	maxWidth?: "none" | "large" | "medium" | "small";
};

export type InlinePeople = {
	_type: "inline_people";
	/**
	 * List Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * People — `array`
	 *
	 *
	 */
	people: Array<SanityKeyed<Person>>;
};

export type InlineHighlight = {
	_type: "inline_highlight";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * theme — `theme`
	 *
	 *
	 */
	theme?: Theme;

	/**
	 * Type — `string`
	 *
	 *
	 */
	type: "fill" | "outline";

	/**
	 * Content — `contentMin`
	 *
	 *
	 */
	content?: ContentMin;
};

export type InlineBook = {
	_type: "inline_book";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Subtitle — `string`
	 *
	 *
	 */
	subtitle?: string;

	/**
	 * Call to Action — `button`
	 *
	 *
	 */
	cta?: Button;

	/**
	 * Authors — `array`
	 *
	 *
	 */
	authors: Array<SanityKeyed<string>>;

	/**
	 * Narrators — `array`
	 *
	 *
	 */
	narrators?: Array<SanityKeyed<string>>;

	/**
	 * Release Date — `date`
	 *
	 *
	 */
	releaseDate?: string;

	/**
	 * Type — `string`
	 *
	 *
	 */
	type: "Physical Book" | "Digital Book" | "Audio Book";

	/**
	 * Genre — `object`
	 *
	 *
	 */
	genre: {
		_type: "genre";
		/**
		 * Type — `string`
		 *
		 *
		 */
		type: "Fiction" | "Non Fiction";

		/**
		 * Category — `array`
		 *
		 *
		 */
		category: Array<
			SanityKeyed<
				| "Biography"
				| "Cooking"
				| "Fantasy"
				| "Historical Fiction"
				| "History"
				| "Horror"
				| "LGBT"
				| "Literary Fiction"
				| "Memoir"
				| "Politics"
				| "Psychology"
				| "Romance"
				| "Sci-Fi"
				| "Science"
				| "Spiritual"
				| "Thriller"
				| "Travel"
				| "True Crime"
				| "DIY"
				| "Dystopian"
				| "Mystery"
				| "Women’s Fiction"
				| "Business"
				| "Career"
				| "LGBTQ+"
				| "Contemporary Fiction"
				| "Graphic Novel"
				| "Magical Realism"
				| "Short Story"
				| "Young Adult"
				| "Children’s"
				| "New Adult"
				| "Memoir & Autobiography"
				| "Food & Drink"
				| "Self-Help"
				| "Humor"
				| "Essays"
			>
		>;
	};

	/**
	 * Cover — `thumbnail`
	 *
	 *
	 */
	cover: Thumbnail;

	/**
	 * Notes — `contentMin`
	 *
	 *
	 */
	content?: ContentMin;
};

export type InlineCta = {
	_type: "inline_cta";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title?: string;

	/**
	 * Title Size — `string`
	 *
	 *
	 */
	size?: "xx-large" | "x-large" | "regular";

	/**
	 * Button Label — `string`
	 *
	 *
	 */
	label: string;

	/**
	 * URL — `url`
	 *
	 *
	 */
	url: string;
};

export type InlineVideo = {
	_type: "inline_video";
	/**
	 * URL — `url`
	 *
	 *
	 */
	href: string;

	/**
	 * Autoplay? — `boolean`
	 *
	 *
	 */
	isAutoplay?: boolean;

	/**
	 * Loop? — `boolean`
	 *
	 * Not all video players support this feature.
	 */
	isLoop?: boolean;

	/**
	 * Muted? — `boolean`
	 *
	 * Not all video players support this feature.
	 */
	isMuted?: boolean;

	/**
	 * With Controls? — `boolean`
	 *
	 * Not all video players support this feature.
	 */
	hasControls?: boolean;
};

export type NavigationGroup = {
	_type: "navigation_group";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Target article — `reference`
	 *
	 *
	 */
	target?: SanityReference<Article>;

	/**
	 * Links — `array`
	 *
	 *
	 */
	links: Array<SanityKeyed<NavigationLinkInternal> | SanityKeyed<NavigationLinkExternal>>;
};

export type NavigationLinkExternal = {
	_type: "navigation_link_external";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Theme Color — `theme`
	 *
	 *
	 */
	theme?: Theme;

	/**
	 * Icon — `iconPicker`
	 *
	 *
	 */
	icon?: IconPicker;

	/**
	 * URL — `url`
	 *
	 *
	 */
	href: string;
};

export type NavigationLinkInternal = {
	_type: "navigation_link_internal";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Theme Color — `theme`
	 *
	 *
	 */
	theme?: Theme;

	/**
	 * Icon — `iconPicker`
	 *
	 *
	 */
	icon?: IconPicker;

	/**
	 * Page — `reference`
	 *
	 *
	 */
	page: SanityReference<Article | Collection | Linkpage | Person | Homepage>;
};

export type FeaturedLink = {
	_type: "featured_link";
	/**
	 * Title — `string`
	 *
	 *
	 */
	title: string;

	/**
	 * Description — `text`
	 *
	 *
	 */
	description: string;

	/**
	 * Theme Color — `theme`
	 *
	 *
	 */
	theme?: Theme;

	/**
	 * URL — `url`
	 *
	 *
	 */
	href: string;
};

export type Documents = Collection | Article | Linkpage | Person | Homepage | Settings;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Tags = Array<{ label: string; value: string }>;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type IconPicker = any;
