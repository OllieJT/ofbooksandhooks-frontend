import style from "./styles.module.scss";
import Link from "next/link";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import { resolveSocialIcon } from "@lib/utility/resolve-platform";

export interface AuthorBioProps {
	cta?: string;
	url: string;
	photo: FixedImage;
}

export const AuthorInstagram = ({
	cta = "Latest on instagram",
	url,
	photo,
}: AuthorBioProps) => {
	const Instagram = resolveSocialIcon("instagram");
	return (
		<article className={style.container}>
			<img
				className={style.image}
				src={photo.url}
				alt={photo.alt}
				width={photo.width}
				height={photo.height}
			/>

			<div className={style.details}>
				<Instagram />
				<h5 className={style.title}>{cta}</h5>

				<Link href={url} passHref>
					<a className={style.button}>Follow</a>
				</Link>
			</div>
		</article>
	);
};
