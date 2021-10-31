import style from "./styles.module.scss";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import Image from "next/image";

export interface CardAuthorProps {
	title: string;
	subtitle: string;
	avatar?: FixedImage;
}

export const CardAuthor = ({ title, subtitle, avatar }: CardAuthorProps) => {
	return (
		<article className={style.container}>
			{avatar && (
				<Image
					className={style.avatar}
					src={avatar.url}
					alt={avatar.alt}
					width={120}
					height={120}
					objectFit="fill"
				/>
			)}
			<h4 className={style.title}>{title}</h4>
			<p className={style.subtitle}>{subtitle}</p>
		</article>
	);
};
