import { handleSanityImageFixed } from "@lib/utility/handle-sanity-image";
import { handleThemeClass, ThemeClass } from "@lib/utility/handle-theme-color";
import Link from "next/link";
import style from "./styles.module.scss";
import Image from "next/image";
import { handleDate } from "@lib/utility";
import { CardDetails } from "../common/card-details";
import type { Thumbnail } from "@lib/groq";

export interface CardArticleProps {
	title: string;
	href: string;
	date: Date;
	image?: Thumbnail;
	tags?: string[];
	theme?: ThemeClass;
}

export const CardArticle = ({ image, theme, href, date, title, tags }: CardArticleProps) => {
	const classNames = [style.container, theme ? handleThemeClass(theme) : ""].join(" ");
	const articleImage =
		image && handleSanityImageFixed({ asset: image, width: 400, height: 400 });
	const articleDate = handleDate(date);

	return (
		<Link href={href} passHref>
			<a className={classNames}>
				{articleImage && (
					<div className={style.thumb}>
						<Image
							className={style.image}
							src={articleImage.url}
							alt={articleImage.alt}
							layout="fill"
							width={articleImage.width}
							height={articleImage.height}
							objectFit="cover"
						/>
					</div>
				)}

				<div className={style.details}>
					<CardDetails title={title} metadata={[articleDate]} tags={tags} />
				</div>
			</a>
		</Link>
	);
};
