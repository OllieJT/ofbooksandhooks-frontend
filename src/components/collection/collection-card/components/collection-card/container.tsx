import { CollectionCardComponent } from "./component";
import { memo } from "react";
import type { Img } from "@lib/groq";
import { handleSanityImageFluid } from "@lib/utility/handle-sanity-image";
import type { Theme } from "@lib/utility/handle-theme-color";

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
