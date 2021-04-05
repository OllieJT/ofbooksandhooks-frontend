import { FixedImage } from "../../../../utility/handle-sanity-image";
import Link from "next/link";
import style from "./article-list.module.scss";

export interface CardArticleComponentProps {
	linkTo: string;
	title: string;
	date: string;
	image?: FixedImage;
	tags: string[];
}

export const CardArticleComponent = ({
	title,
	linkTo,
	date,
	image,
	tags,
}: CardArticleComponentProps) => {
	return (
		<Link href={linkTo} passHref>
			<a className={style.container} href={linkTo}>
				{image && (
					<img
						className={style.thumb}
						src={image.url}
						width={image.width}
						height={image.height}
						alt={image.alt}
					/>
				)}
				<div className={style.content}>
					<ul className={style.tags}>
						{tags.map((tag) => (
							<li key={tag} className={style.tag}>
								<p className={style.label}>{tag}</p>
							</li>
						))}
					</ul>
					<h5 className={style.title}>{title}</h5>
					<p className={`${style.label} ${style.date}`}>{date}</p>
				</div>
			</a>
		</Link>
	);
};
