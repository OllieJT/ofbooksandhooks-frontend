import { Article } from "../lib/schema";
import { CustomImage, handleSanityImage, Dimensions } from "./handle-sanity-image";

export const handleCollectionImages = (
	articles: Article[],
	size: Dimensions = { width: 200, height: 200 },
): CustomImage[] => {
	const images = articles.map((article) => {
		const articleImage = handleSanityImage(article.thumbnail, {
			width: size.width,
			height: size.height,
		});

		console.log({ articleImage, article });

		if (!articleImage) {
			return null;
		}
		return articleImage;
	});

	console.log({ images });

	const isCustomImage = (obj: any): obj is CustomImage => {
		return !!obj;
	};

	const filtered = images.filter(isCustomImage);

	return filtered || [];
};
