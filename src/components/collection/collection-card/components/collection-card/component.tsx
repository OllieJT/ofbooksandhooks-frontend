import style from "./styles.module.scss";
import Link from "next/link";
import type { FluidImage } from "@lib/utility/handle-sanity-image";
import { CollectionCardWrapper } from "../collection-card-wrapper";
import type { Theme } from "@lib/utility/handle-theme-color";
import { CollectionCardTitle } from "../collection-card-title";
import Image from "next/image";

interface Props {
	linkTo: string;
	title: string;
	subtitle: string;
	articles: FluidImage[];

	theme?: Theme;
}

export const CollectionCardComponent = (props: Props) => {
	return (
		<CollectionCardWrapper theme={props.theme}>
			<Link href={props.linkTo} passHref>
				<a className={style.container}>
					<CollectionCardTitle
						className={style.title}
						title={props.title}
						subtitle={props.subtitle}
					/>

					<ul className={style.articles}>
						{props.articles.map((image) => (
							<li key={image.url}>
								<Image src={image.url} alt={image.alt} />
							</li>
						))}
					</ul>
				</a>
			</Link>
		</CollectionCardWrapper>
	);
};
