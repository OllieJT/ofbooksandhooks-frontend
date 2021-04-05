import style from "./styles.module.scss";
import Link from "next/link";
import { handleSanityImageFixed, ImageFit } from "../../utility/handle-sanity-image";
import { Img } from "../../lib/schema";

export interface AuthorBioProps {
	title: string;
	subtitle: string;
	avatar: Img;
	cta?: {
		label: string;
		url: string;
	};
}

export const AuthorBio = ({ title, subtitle, avatar, cta }: AuthorBioProps) => {
	const avatarImage = handleSanityImageFixed({
		asset: avatar,
		width: 80,
		height: 80,
		fit: ImageFit.Fill,
	});

	return (
		<article className={style.container}>
			{avatarImage && (
				<img
					src={avatarImage.url}
					alt={avatarImage.alt}
					width={avatarImage.width}
					height={avatarImage.height}
				/>
			)}
			<div>
				<h4>{title}</h4>
				<p>{subtitle}</p>

				{cta && (
					<Link href={cta.url} passHref>
						<a className={style.link}>{cta.label}</a>
					</Link>
				)}
			</div>
		</article>
	);
};
