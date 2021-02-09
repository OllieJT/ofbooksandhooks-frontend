import style from "./styles.module.scss";
import Image from "next/image";
import {
	ArticleHeaderMetadata,
	ArticleHeaderMetadataProps,
} from "../article-header-metadata";
import { CustomImage } from "../../../utility/handle-sanity-image";

export interface ArticleHeaderProps {
	title: string;
	metadata: ArticleHeaderMetadataProps;
	image?: CustomImage;
}

export const ArticleHeader = ({ title, metadata, image }: ArticleHeaderProps) => {
	return (
		<header className={style.container}>
			<div className={style.content}>
				<h1>{title}</h1>
				<h1>{title}</h1>
				<ArticleHeaderMetadata {...metadata} />
			</div>

			<div className={style.background}>
				{image && (
					<Image
						className={style.image}
						src={image.url}
						width={image.width}
						height={image.height}
						alt={image.alt || ""}
						priority
					/>
				)}
			</div>
		</header>
	);
};
