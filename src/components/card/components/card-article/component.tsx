import { FixedImage } from "../../../../utility/handle-sanity-image";
import Link from "next/link";
import style from "./styles.module.scss";
import { CardTitle } from "../../common";

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

				<CardTitle
					className={style.title}
					title={title}
					date={date}
					tags={tags}
				/>
			</a>
		</Link>
	);
};
