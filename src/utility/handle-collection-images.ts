import { Article } from "../lib/schema";
import {
	handleSanityImageFixed,
	FixedImage,
	ImageDimensions,
} from "./handle-sanity-image";

export const handleCollectionImages = (
	articles: Article[],
	size: ImageDimensions = { width: 200, height: 200 },
): FixedImage[] => {
	const images = articles.map((article) => {
		const articleImage = handleSanityImageFixed({
			asset: article.thumbnail,
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

	const isCustomImage = (obj: any): obj is FixedImage => {
		return !!obj;
	};

	const filtered = images.filter(isCustomImage);

	return filtered || [];
};
