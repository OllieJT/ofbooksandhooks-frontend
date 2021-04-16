import { handleThemeColor } from "../../../utility/handle-theme-color";
import { resolveUrl } from "../../../utility/resolve-url";
import { CardArticleProps, CardCollectionProps } from "../";
import { CardSize, CardType } from "../models";
import { GroqArticleCard, GroqCollectionCard, Theme } from "../../../lib/groq/models";

interface Options {
	size: CardSize;
	theme?: Theme;
}

interface TypeCollection extends Options {
	document: GroqCollectionCard;
}
interface TypeArticle extends Options {
	document: GroqArticleCard;
}

export const handleCardArticle = ({
	document,
	theme,
}: TypeArticle): CardArticleProps => {
	return {
		type: CardType.Article,
		size: CardSize.Small,
		theme: handleThemeColor(theme),

		linkTo: resolveUrl({
			slug: document.slug.current,
			type: document._type,
		}),
		title: document.title,
		publishAt: new Date(document.metadata.publishAt),
		image: document.thumbnail,
		tags: document.topics.map((topic) => topic.title),
	};
};

export const handleCardCollection = ({
	document,
	size,
	theme,
}: TypeCollection): CardCollectionProps => {
	return {
		type: CardType.Collection,
		size: size,
		theme: (theme && handleThemeColor(theme)) || handleThemeColor(document.theme),

		title: document.title,
		subtitle: "Featured Collection",
		linkTo: resolveUrl({
			slug: document.slug.current,
			type: document._type,
		}),
		images: document.articles.map((article) => article.thumbnail),
	};
};
