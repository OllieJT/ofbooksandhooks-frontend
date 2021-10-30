import style from "./styles.module.scss";
import Link from "next/link";
import { FluidImage, handleSanityImageFluid } from "@lib/utility/handle-sanity-image";
import type { Theme } from "@lib/utility/handle-theme-color";
import { CollectionCardWrapper } from "./components/collection-card-wrapper";
import { CollectionCardTitle } from "./components/collection-card-title";
import Image from "next/image";
import type { Img } from "@lib/groq";

export interface CardCollectionProps {
	href: string;
	title: string;
	subtitle?: string;
	images: Img[];

	theme?: Theme;
}

export const CardCollection = (props: CardCollectionProps) => {
	const articleImages: FluidImage[] = props.images.map((img) => handleSanityImageFluid({ asset: img, maxWidth: 320 }));

	return (
		<CollectionCardWrapper theme={props.theme}>
			<Link href={props.href} passHref>
				<a className={style.container}>
					<CollectionCardTitle className={style.title} title={props.title} subtitle={props.subtitle} />

					<ul className={style.articles}>
						{articleImages.map((image) => (
							<li key={image.url}>
								<Image src={image.url} alt={image.alt} layout="fill" />
							</li>
						))}
					</ul>
				</a>
			</Link>
		</CollectionCardWrapper>
	);
};
