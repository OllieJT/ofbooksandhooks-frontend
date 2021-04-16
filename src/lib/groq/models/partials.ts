import type * as Schema from "./schema";

export type GroqArticleCard = Pick<
	Schema.Article,
	"title" | "slug" | "metadata" | "thumbnail" | "_id" | "_type" | "_createdAt"
> & {
	topics: Schema.Topic[];
};

// Collection

export type GroqCollectionCard_Article = Pick<
	Schema.Article,
	"title" | "slug" | "thumbnail" | "_id" | "_type" | "_createdAt"
>;

export type GroqCollectionCard = Pick<
	Schema.Collection,
	"title" | "slug" | "metadata" | "theme" | "_id" | "_type" | "_createdAt"
> & {
	articles: GroqCollectionCard_Article[];
};

export type GroqCollectionToken = Pick<
	Schema.Collection,
	"title" | "slug" | "theme" | "_id" | "_type" | "_createdAt"
> & {
	articles: Pick<Schema.Article, "slug">;
};
