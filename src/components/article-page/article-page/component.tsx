import { GroqArticlePage_Recommended } from "../../../lib/groq/article-page";
import { FixedImage } from "../../../utility/handle-sanity-image";
import { ViewContent } from "../../view";
import { ArticleFooter } from "../article-page-footer";
import { ArticleHeader, ArticleHeaderProps } from "../article-page-header";
import style from "./styles.module.scss";

interface Props extends ArticleHeaderProps {
	title: string;
	children: React.ReactNode;
	image?: FixedImage;
	recommendations: GroqArticlePage_Recommended[];
}

export const ArticlePageLayout = ({
	children,
	image,
	date,
	authorLink,
	tags,
	title,
	authorName,
	recommendations,
}: Props) => {
	return (
		<div className={style.container}>
			<ViewContent image={image}>
				<ArticleHeader
					title={title}
					date={date}
					authorName={authorName}
					authorLink={authorLink}
					tags={tags}
				/>
				{children}
			</ViewContent>
			<ArticleFooter recommendations={recommendations} />
		</div>
	);
};
