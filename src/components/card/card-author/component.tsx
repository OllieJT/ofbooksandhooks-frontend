import style from "./styles.module.scss";
import Link from "next/link";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import Image from "next/image";

export interface CardAuthorProps {
	title: string;
	subtitle: string;
	avatar?: FixedImage;
	cta?: {
		label: string;
		url: string;
	};
}

export const CardAuthor = ({ title, subtitle, avatar, cta }: CardAuthorProps) => {
	return (
		<article className={style.container}>
			<header className={style.header}>
				{avatar && <Image className={style.avatar} src={avatar.url} alt={avatar.alt} width={88} height={88} />}
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
