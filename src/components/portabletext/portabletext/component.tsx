//@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { ContentMin, Richtext } from "../../../lib/schema";
import { serializers } from "../portabletext-serializer";
import style from "./styles.module.scss";
interface Props {
	blocks?: Richtext | ContentMin;
}

/* export const PortableText = createPortableTextComponent({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: serializers,
}); */

export const PortableText = ({ blocks = [] }: Props) => (
	<BlockContent
		className={style.container}
		blocks={blocks}
		serializers={serializers}
		dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
		projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
		imageOptions={{ w: 640, h: 480, fit: "max" }}
		renderContainerOnSingleChild={true}
	/>
);
