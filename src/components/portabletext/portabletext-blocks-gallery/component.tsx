import { Img } from "../../../lib/schema";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";
import { slugify } from "../../../utility";

interface Props {
	title: string;
	images?: Img[];
}

export const BlockGallery = ({ title, images = [] }: Props) => {
	return (
		<section className={style.container} id={slugify(title)}>
			<ul>
				{images.map(({ asset, alt }) => {
					const image = handleSanityImage(asset, {
						width: 1280,
						height: 720,
						alt,
					});

					if (!image) {
						return null;
					}
					return (
						<li key={asset._ref}>
							<Image
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
