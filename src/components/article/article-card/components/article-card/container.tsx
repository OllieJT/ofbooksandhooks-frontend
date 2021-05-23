import { ArticleCardComponent } from "./component";
import { memo } from "react";
import { Img } from "../../../../../lib/groq";
import { handleDate } from "../../../../../utility";
import { handleSanityImageFixed } from "../../../../../utility/handle-sanity-image";
import { Theme } from "../../../../../utility/handle-theme-color";

export enum CardSize {
	Small = "Small",
	Tall = "Tall",
	Wide = "Wide",
	Large = "Large",
}
interface Props {
	linkTo: string;
	title: string;
	publishAt: Date;
	image?: Img;
	tags?: string[];
	theme?: Theme;
}

const ArticleCardContainer = ({
	linkTo,
	title,
	publishAt,
	image,
	tags,
	theme,
}: Props) => {
	const articleImage =
		image && handleSanityImageFixed({ asset: image, width: 400, height: 400 });

	const articleDate = handleDate(publishAt);

	return (
		<ArticleCardComponent
			linkTo={linkTo}
			title={title}
			date={articleDate}
			image={articleImage}
			tags={tags}
			theme={theme}
		/>
	);
};

export const ArticleCard = memo(ArticleCardContainer);
