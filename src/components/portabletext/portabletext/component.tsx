import { createPortableTextComponent } from "next-sanity";
import { blocks } from "../../blocks";

export const PortableText = createPortableTextComponent({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: blocks,
});
