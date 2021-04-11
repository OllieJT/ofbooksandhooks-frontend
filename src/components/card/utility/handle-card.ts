import { Theme } from "../../../lib/schema";
import { handleThemeColor } from "../../../utility/handle-theme-color";
import { resolveUrl } from "../../../utility/resolve-url";
import { CardArticleProps, CardCollectionProps } from "../";
import { CardSize, CardType } from "../models";
import { GroqCardArticle, GroqCardCollection } from "../../../lib/db/groq-partial-card";

interface Options {
	size: CardSize;
	theme?: Theme;
}

interface TypeCollection extends Options {
	document: GroqCardCollection;
}
interface TypeArticle extends Options {
	document: GroqCardArticle;
}

export const handleCardArticle = ({
	document,
	theme,
}: TypeArticle): CardArticleProps => ({
	type: CardType.Article,
	size: CardSize.Small,
	theme,

	linkTo: resolveUrl(document),
	title: document.title,
	publishAt: new Date(document.metadata.publishAt),
	image: document.thumbnail,
	tags: document.topics.map((topic) => topic.title),
});

export const handleCardCollection = ({
	document,
	size,
	theme,
}: TypeCollection): CardCollectionProps => ({
	type: CardType.Collection,
	size: size,
	theme: theme || handleThemeColor(document.theme),

	title: document.title,
	subtitle: "Featured Collection",
	linkTo: resolveUrl(document),
	images: document.articles.map((article) => article.thumbnail),
});
