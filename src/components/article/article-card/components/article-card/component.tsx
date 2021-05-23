import { FixedImage } from "../../../../../utility/handle-sanity-image";
import Link from "next/link";
import style from "./styles.module.scss";
import { ArticleCardTitle } from "../article-card-title";
import { ArticleCardWrapper } from "../article-card-wrapper";
import { Theme } from "../../../../../utility/handle-theme-color";

interface Props {
	linkTo: string;
	title: string;
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

					<ArticleCardTitle
						className={style.title}
						title={props.title}
						date={props.date}
						tags={props.tags}
					/>
				</a>
			</Link>
		</ArticleCardWrapper>
	);
};
