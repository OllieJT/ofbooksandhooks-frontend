import { handleSanityImageFluid } from "../../../../utility/handle-sanity-image";
import { CardBase, CardSize, CardType } from "../../models";
import { CardArticleComponentLayout, CardCollectionComponent } from "./component";
import { CardWrapper } from "../../common";
import { Img } from "../../../../lib/schema";
import { memo } from "react";

export interface CardCollectionProps extends CardBase<CardType.Collection> {
	title: string;
	subtitle?: string;
	linkTo: string;
	images: Img[];
}

const handleCardCollectionLayout = (size: CardSize) => {
	switch (size) {
		case CardSize.Tall:
			return CardArticleComponentLayout.Stack;
		case CardSize.Wide:
			return CardArticleComponentLayout.Row;
		default:
			return CardArticleComponentLayout.Grid;
	}
};
const CardCollectionContainer = ({
	// type,
	size,
	theme,
	title,
	subtitle = "Featured Collection",
	linkTo,
	images,
}: CardCollectionProps) => {
	const articleImages = images.map((img) =>
		handleSanityImageFluid({ asset: img, maxWidth: 320 }),
	);

	return (
		<CardWrapper theme={theme}>
			<CardCollectionComponent
				title={title}
				subtitle={subtitle}
				linkTo={linkTo}
				articles={articleImages}
				layout={handleCardCollectionLayout(size)}
			/>
		</CardWrapper>
	);
};

export const CardCollection = memo(CardCollectionContainer);
