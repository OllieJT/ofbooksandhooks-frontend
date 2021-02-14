import { ContentMin, Genre, Img } from "../../../lib/schema";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import { PortableText } from "..";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	title: string;
	subtitle?: string;
	authors: string[];
	narrators?: string[];
	isbn?: string;
	releaseDate?: string;
	type: "Physical Book" | "Digital Book" | "Audio Book";
	genre: Genre;
	cover: Img;
	content?: ContentMin;
}

export const BlockBook = ({
	title,
	// type,
	authors,
	cover,
	genre,
	content,
	// isbn,
	// narrators,
	// releaseDate,
	subtitle,
}: Props) => {
	const authorStr = authors
		.toString()
		.replace("[", "")
		.replace("]", "")
		.replace(",", " & ")
		.trim();

	const image = handleSanityImage(cover, {
		width: 240,
		height: 360,
		alt: cover.alt,
	});

	//todo: add JSONLD
	return (
		<section className={style.container}>
			<header className={style.header}>
				<h3 className={style.title}>{title}</h3>
				<h4 className={style.subtitle}>{subtitle}</h4>
				<p className={style.type}>{genre.type}</p>
				<p className={style.author}>By {authorStr}</p>
				<div className={style.cover}>
					{image && (
						<Image
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					)}
				</div>
			</header>
			<article className={style.content}>
				<PortableText blocks={content} />
			</article>
		</section>
	);
};
