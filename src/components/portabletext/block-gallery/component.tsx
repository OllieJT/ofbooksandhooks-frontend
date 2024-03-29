import { handleSanityImageFixed } from "@lib/utility/handle-sanity-image";
import style from "./styles.module.scss";
import { slugify } from "@lib/utility";
import type { Thumbnail } from "@lib/groq";
import Image from "next/image";

interface Props {
	title: string;
	images?: Thumbnail[];
}

export const BlockGallery = ({ title, images = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{images.map((img) => {
				const image = handleSanityImageFixed({
					asset: img,
					width: 800,
					height: 800,
				});

				if (!image) {
					return null;
				}
				return (
					<li key={img.asset._ref} className={style.item}>
						<Image
							className={style.thumb}
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
							//objectFit="fill"
						/>
					</li>
				);
			})}
		</ul>
	);
};
