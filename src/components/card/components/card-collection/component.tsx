import style from "./styles.module.scss";
import Link from "next/link";
import { FluidImage } from "../../../../utility/handle-sanity-image";
import { CardTitle } from "../../common";

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
			<a className={style.container}>
				<CardTitle className={style.title} title={title} subtitle={subtitle} />

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
