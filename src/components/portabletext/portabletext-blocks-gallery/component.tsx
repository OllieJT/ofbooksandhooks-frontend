import { Img } from "../../../lib/schema";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import { slugify } from "../../../utility";

interface Props {
	title: string;
	images?: Img[];
}

export const BlockGallery = ({ title, images = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{images.map(({ asset, alt }) => {
				const image = handleSanityImage(asset, {
					width: 1280,
					height: 720,
					alt,
					fluid: true,
				});

				if (!image) {
					return null;
				}
				return (
					<li key={asset._ref} className={style.item}>
						<img
							className={style.thumb}
							src={image.url}
							alt={image.alt}
							width={image.width}
						/>
					</li>
				);
			})}
		</ul>
	);
};
