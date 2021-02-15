import style from "./styles.module.scss";
import Link from "next/link";
import { CustomImage } from "../../utility/handle-sanity-image";
import { Theme, handleThemeClass } from "../../utility/handle-theme-color";

export interface CollectionProps {
	title: string;
	subtitle: string;
	theme: Theme;
	linkTo: string;

	articles: CustomImage[];
}

export const Collection = ({
	title,
	subtitle,
	articles,
	theme,
	linkTo,
}: CollectionProps) => {
	const themeClass = handleThemeClass(theme);
	console.log({ articles });
	return (
		<article className={style.container}>
			<Link href={linkTo} passHref>
				<a className={`${style.link} ${themeClass}`}>
					<div className={style.header}>
						<h5 className={style.title}>{title}</h5>
						<p className={style.subtitle}>{subtitle}</p>
					</div>
					<ul className={style.articles}>
						{articles.map((image) => (
							<li>
								<img
									src={image.url}
									width={image.width}
									height={image.height}
									alt={image.alt}
								/>
							</li>
						))}
					</ul>
				</a>
			</Link>
		</article>
	);
};
