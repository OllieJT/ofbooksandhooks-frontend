import type { InlineImage } from "@lib/groq";
import { handleSanityImageFixed, ImageFit } from "@lib/utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	img: InlineImage;
}

/* TODO: handle constraints for inline images
	const handleInline = (align?: "left" | "right" | "none"): "left" | "right" | false => {
		switch (align) {
			case "left":
			case "right":
				return align;
			default:
			case "none":
				return false;
		}
	};

	const handleMaxWidth = (align?: "none" | "large" | "medium" | "small"): string => {
		switch (align) {
			case "large":
				return "50%";
			case "medium":
				return "25%";
			case "small":
				return "15%";
			default:
			case "none":
				return "none";
		}
	};
*/

export const BlockImage = ({ img }: Props) => {
	const image = handleSanityImageFixed({
		asset: img,
		width: 800,
		height: 800,
		fit: ImageFit.Max,
	});

	if (!image) {
		return null;
	}

	//const alignImage = handleInline(img.float);

	return (
		<div>
			<Image
				className={style.image}
				/* TODO: Fix inline styles for Image element
				style={
					alignImage
						? {
								display: "inline-block",
								float: alignImage,
								maxWidth: handleMaxWidth(img.maxWidth),
								marginLeft: alignImage === "left" ? "var(--space-medium)" : 0,
								marginRight: alignImage === "right" ? "var(--space-medium)" : 0,
						}
						: {}
				} */
				src={image.url}
				alt={image.alt}
				width={image.width}
				height={image.height}
				//objectFit="fill"
			/>
		</div>
	);
};
