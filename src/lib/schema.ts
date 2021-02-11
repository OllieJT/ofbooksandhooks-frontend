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
};

/**
 * Topic
 *
 *
 */
export interface Topic extends SanityDocument {
  _type: "topic";

  /**
   * Page Title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * This determines the URL path for the page
   */
  slug: { _type: "slug"; current: string };

  /**
   * Metadata — `metadata`
   *
   *
   */
  metadata: Metadata;
}

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
   * Slug — `slug`
   *
   * This determines the URL path for the page
   */
  slug: { _type: "slug"; current: string };

  /**
   * theme — `theme`
   *
   *
   */
  theme?: Theme;

  /**
   * Articles — `array`
   *
   *
   */
  articles: Array<SanityKeyedReference<Article>>;

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
   * URL Slug — `slug`
   *
   * This determines the URL path for the page
   */
  slug: { _type: "slug"; current: string };

  /**
   * Content — `richtext`
   *
   *
   */
  content?: Richtext;

  /**
   * Topics — `array`
   *
   *
   */
  topics?: Array<SanityKeyedReference<Topic>>;

  /**
   * Recommended — `array`
   *
   *
   */
  recommended: Array<SanityKeyedReference<Collection | Article>>;

  /**
   * Article Image — `img`
   *
   *
   */
  thumbnail: Img;

  /**
   * Author — `reference`
   *
   *
   */
  author: SanityReference<Author>;

  /**
   * Metadata — `metadata`
   *
   *
   */
  metadata: Metadata;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Known As — `string`
   *
   *
   */
  knownAs: string;

  /**
   * URL Slug — `slug`
   *
   * This determines the URL path for the page
   */
  slug: { _type: "slug"; current: string };

  /**
   * Platforms — `array`
   *
   *
   */
  platforms?: Array<SanityKeyed<Platform>>;

  /**
   * Author Avatar — `img`
   *
   *
   */
  avatar?: Img;
}

/**
 * Homepage
 *
 *
 */
export interface Homepage extends SanityDocument {
  _type: "homepage";

  /**
   * Featured Article — `reference`
   *
   *
   */
  featured: SanityReference<Article | Collection>;

  /**
   * Blocks — `array`
   *
   *
   */
  blocks: Array<SanityKeyedReference<Collection | Article>>;

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
   * Mini Biography — `biography`
   *
   *
   */
  biography: Biography;

  /**
   * Profile — `reference`
   *
   *
   */
  profile: SanityReference<Author>;
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
  reference: SanityReference<Article | Collection>;
};

export type Product = {
  _type: "product";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Brand — `string`
   *
   *
   */
  brand?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Notice — `notice`
   *
   *
   */
  notice?: Notice;

  /**
   * Estimated Cost — `cost`
   *
   *
   */
  cost: Cost;

  /**
   * Deal Expires — `datetime`
   *
   * If this is a limited time offer, include the time the offer expires
   */
  expiresAt?: string;

  /**
   * URL — `string`
   *
   *
   */
  url: string;

  /**
   * Thumbnail — `img`
   *
   *
   */
  thumbnail: Img;
};

export type Products = {
  _type: "products";
  /**
   * List Title — `string`
   *
   *
   */
  title: string;

  /**
   * Products — `array`
   *
   *
   */
  products?: Array<SanityKeyed<Product>>;
};

export type People = {
  _type: "people";
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

export type Person = {
  _type: "person";
  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Known As — `string`
   *
   *
   */
  knownAs: string;

  /**
   * Gender — `string`
   *
   *
   */
  gender?: "female" | "male" | "non-binary";

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Photo — `img`
   *
   *
   */
  photo?: Img;
};

export type Book = {
  _type: "book";
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
   * ISBN — `string`
   *
   * https://isbnsearch.org/
   */
  isbn?: string;

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
   * Genre — `genre`
   *
   *
   */
  genre: Genre;

  /**
   * Cover — `img`
   *
   *
   */
  cover: Img;

  /**
   * Notes — `contentMin`
   *
   *
   */
  content?: ContentMin;
};

export type Theme = "yellow" | "green" | "blue" | "none";

export type Gallery = {
  _type: "gallery";
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
  images?: Array<SanityKeyed<Img>>;
};

export type Video = {
  _type: "video";
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

export type Highlight = {
  _type: "highlight";
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

export type Richtext = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<Highlight>
  | SanityKeyed<Gallery>
  | SanityKeyed<Book>
  | SanityKeyed<Video>
  | SanityKeyed<People>
  | SanityKeyed<Products>
>;

export type ContentMin = Array<SanityKeyed<SanityBlock>>;

export type Metadata = {
  _type: "metadata";
  /**
   * Page Type — `string`
   *
   * What is the primary content type for this page? If you included Profile / Book / Product blocks, the metadata will automaticallly be added for them.
   */
  type: "website" | "article" | "profile" | "book";

  /**
   * Publish Date — `datetime`
   *
   * This will be avalible but hidden on the site until after this date.
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
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Images — `array`
   *
   * The first image is used on the site, the rest are used for social media sites that support galleries.
   */
  thumbnails: Array<SanityKeyed<Img>>;

  /**
   * Hidden — `boolean`
   *
   * This will be hidden from discovery throughout the site. Bots, and people with the URL will still be able to access it.
   */
  hidden: boolean;

  /**
   * No follow — `boolean`
   *
   * Tells search engines to not use this page for ranking calculations.
   */
  nofollow: boolean;

  /**
   * No Index — `boolean`
   *
   * Tells search engines to not crawl this page.
   */
  noindex: boolean;
};

export type Platform = {
  _type: "platform";
  /**
   * Name — `string`
   *
   *
   */
  name:
    | "twitter"
    | "instagram"
    | "youtube"
    | "facebook"
    | "reddit"
    | "discord"
    | "tiktok"
    | "etsy"
    | "pinterest"
    | "website";

  /**
   * Link — `url`
   *
   *
   */
  link: string;
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

export type Cost = {
  _type: "cost";
  /**
   * Amount — `number`
   *
   *
   */
  amount: number;

  /**
   * Currency — `string`
   *
   *
   */
  currency: "USD" | "GBP" | "EUR";
};

export type Genre = {
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
    >
  >;
};

export type Biography = {
  _type: "biography";
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
   * Photo — `img`
   *
   *
   */
  photo: Img;
};

export type Img = {
  _type: "img";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type Documents =
  | Topic
  | Collection
  | Article
  | Author
  | Homepage
  | Settings;
