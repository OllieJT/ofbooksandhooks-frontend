import { Richtext } from "../../../lib/schema";
import { CustomImage } from "../../../utility/handle-sanity-image";
import { ViewContent } from "../../view";
import { PortableText } from "../../portabletext";
import { ArticleHeader, ArticleHeaderProps } from "../article-page-header";
import style from "./styles.module.scss";

interface Props extends ArticleHeaderProps {
	title: string;
	children: React.ReactNode;
	image?: CustomImage;
	content?: Richtext;
}

export const ArticlePageLayout = ({
	children,
	image,
	date,
	authorLink,
	tags,
	title,
	authorName,
	content,
}: Props) => {
	return (
		<ViewContent image={image}>
			<ArticleHeader
				title={title}
				date={date}
				authorName={authorName}
				authorLink={authorLink}
				tags={tags}
			/>
			<div className={style.content}>
				<PortableText blocks={content} />
			</div>
			{children}
		</ViewContent>
	);
};
