import { FixedImage } from "../../../../../utility/handle-sanity-image";
import Link from "next/link";
import style from "./styles.module.scss";
import { ArticleCardWrapper } from "../article-card-wrapper";
import { Theme } from "../../../../../utility/handle-theme-color";

interface Props {
	linkTo: string;
	title: string;
	subtitle?: string;
	date: string;

	image?: FixedImage;
	tags?: string[];
	theme?: Theme;
}

export const ArticleCardComponent = (props: Props) => {
	return (
		<ArticleCardWrapper theme={props.theme}>
			<Link href={props.linkTo} passHref>
				<a className={style.container}>
					{props.image && (
						<img
							className={style.thumb}
							src={props.image.url}
							width={props.image.width}
							height={props.image.height}
							alt={props.image.alt}
						/>
					)}

					<div className={style.details}>
						<h4 className={style.title}>{props.title}</h4>
						<p className={`${style.date} ${style.label}`}>{props.date}</p>

						{props.tags && (
							<ul className={style.tagList}>
								{props.tags.map((tag) => (
									<li key={tag} className={style.tagItem}>
										<p className={`${style.tag} ${style.label}`}>
											{tag}
										</p>
									</li>
								))}
							</ul>
						)}
					</div>
				</a>
			</Link>
		</ArticleCardWrapper>
	);
};
