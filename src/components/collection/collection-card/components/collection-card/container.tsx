import { CollectionCardComponent } from "./component";
import { memo } from "react";
import { Img } from "../../../../../lib/groq";
import { handleSanityImageFluid } from "../../../../../utility/handle-sanity-image";
import { Theme } from "../../../../../utility/handle-theme-color";

interface Props {
	title: string;
	subtitle?: string;
	linkTo: string;
	images: Img[];
	theme?: Theme;
}

const CardCollectionContainer = ({
	theme,
	title,
	subtitle = "Featured Collection",
	linkTo,
	images,
}: Props) => {
	const articleImages = images.map((img) =>
		handleSanityImageFluid({ asset: img, maxWidth: 320 }),
	);

	return (
		<CollectionCardComponent
			title={title}
			subtitle={subtitle}
			linkTo={linkTo}
			articles={articleImages}
			theme={theme}
		/>
	);
};

export const CollectionCard = memo(CardCollectionContainer);
