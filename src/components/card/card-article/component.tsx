import { handleSanityImageFixed } from "@lib/utility/handle-sanity-image";
import { handleThemeClass, Theme } from "@lib/utility/handle-theme-color";
import Link from "next/link";
import style from "./styles.module.scss";
import Image from "next/image";
import { handleDate } from "@lib/utility";
import type { Img } from "@lib/groq";

export interface CardArticleProps {
	href: string;
	title: string;
	date: Date;

	image?: Img;
	tags?: string[];
	theme?: Theme;
}

export const CardArticle = ({ image, theme, href, date, title, tags }: CardArticleProps) => {
	const themeClass = handleThemeClass(theme);
	const classNames = [style.wrapper, themeClass].join(" ");
	const articleImage = image && handleSanityImageFixed({ asset: image, width: 400, height: 400 });
	const articleDate = handleDate(date);
	return (
		<article className={classNames}>
			<Link href={href} passHref>
				<a className={style.container}>
					{articleImage && <Image className={style.thumb} src={articleImage.url} width={articleImage.width} height={articleImage.height} alt={articleImage.alt} />}

					<div className={style.details}>
						<h4 className={style.title}>{title}</h4>
						<p className={`${style.date} ${style.label}`}>{articleDate}</p>

						{tags && (
							<ul className={style.tagList}>
								{tags.map((tag) => (
									<li key={tag} className={style.tagItem}>
										<p className={`${style.tag} ${style.label}`}>{tag}</p>
									</li>
								))}
							</ul>
						)}
					</div>
				</a>
			</Link>
		</article>
	);
};
