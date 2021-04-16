import { Article } from "../lib/groq";
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

		if (!articleImage) {
			return null;
		}
		return articleImage;
	});

	const isCustomImage = (obj: any): obj is FixedImage => {
		return !!obj;
	};

	const filtered = images.filter(isCustomImage);

	return filtered || [];
};
