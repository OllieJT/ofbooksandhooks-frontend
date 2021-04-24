import { handleSanityImageFluid } from "../../../../utility/handle-sanity-image";
import { CardBase, CardType } from "../../models";
import { CardCollectionComponent } from "./component";
import { CardWrapper } from "../../common";
import { memo } from "react";
import { Img } from "../../../../lib/groq";

export interface CardCollectionProps extends CardBase<CardType.Collection> {
	title: string;
	subtitle?: string;
	linkTo: string;
	images: Img[];
}

const CardCollectionContainer = ({
	// type,
	// size,
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
			/>
		</CardWrapper>
	);
};

export const CardCollection = memo(CardCollectionContainer);
