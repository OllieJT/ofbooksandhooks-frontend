import { handleSanityImageFixed } from "../../../../utility/handle-sanity-image";
import { CardBase, CardType } from "../../models";
import { CardArticleComponent } from "./component";
import { CardWrapper } from "../card-wrapper";
import { Img } from "../../../../lib/schema";
import { handleDate } from "../../../../utility";
import { memo } from "react";

export interface CardArticleProps extends CardBase<CardType.Article> {
	linkTo: string;
	title: string;
	publishAt: Date;
	image?: Img;
	tags?: string[];
}

const CardArticleContainer = ({
	// type,
	// size,
	theme,
	title,
	linkTo,
	publishAt,
	image,
	tags = [],
}: CardArticleProps) => {
	const articleImage =
		image && handleSanityImageFixed({ asset: image, width: 400, height: 400 });

	const articleDate = handleDate(publishAt);

	return (
		<CardWrapper theme={theme}>
			<CardArticleComponent
				linkTo={linkTo}
				title={title}
				date={articleDate}
				image={articleImage}
				tags={tags}
			/>
		</CardWrapper>
	);
};

export const CardArticle = memo(CardArticleContainer);
