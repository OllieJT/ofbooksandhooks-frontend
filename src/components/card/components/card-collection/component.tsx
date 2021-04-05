import style from "./styles.module.scss";
import Link from "next/link";
import { FluidImage } from "../../../../utility/handle-sanity-image";

export interface CardCollectionComponentProps {
	title: string;
	subtitle: string;
	linkTo: string;
	articles: FluidImage[];
}

export const CardCollectionComponent = ({
	title,
	subtitle,
	articles,
	linkTo,
}: CardCollectionComponentProps) => {
	return (
		<Link href={linkTo} passHref>
			<a className={style.link}>
				<div className={style.header}>
					<h5 className={style.title}>{title}</h5>
					<p className={style.subtitle}>{subtitle}</p>
				</div>
				<ul className={style.articles}>
					{articles.map((image) => (
						<li key={image.url}>
							<img src={image.url} alt={image.alt} />
						</li>
					))}
				</ul>
			</a>
		</Link>
	);
};
