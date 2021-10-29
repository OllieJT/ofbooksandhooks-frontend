import style from "./styles.module.scss";
import Link from "next/link";
import type { FixedImage } from "@lib/utility/handle-sanity-image";

export interface AuthorBioProps {
	title: string;
	subtitle: string;
	avatar?: FixedImage;
	cta?: {
		label: string;
		url: string;
	};
}

export const AuthorBio = ({ title, subtitle, avatar, cta }: AuthorBioProps) => {
	return (
		<article className={style.container}>
			<header className={style.header}>
				{avatar && (
					<img
						className={style.avatar}
						src={avatar.url}
						alt={avatar.alt}
						width={88}
						height={88}
					/>
				)}
				<h4 className={style.title}>{title}</h4>
			</header>
			<p className={style.subtitle}>{subtitle}</p>

			{cta && (
				<Link href={cta.url} passHref>
					<a className={style.link}>{cta.label}</a>
				</Link>
			)}
		</article>
	);
};
