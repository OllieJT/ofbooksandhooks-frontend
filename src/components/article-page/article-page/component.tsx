import { FixedImage } from "../../../utility/handle-sanity-image";
import { ViewContent } from "../../view";
import { ArticleHeader, ArticleHeaderProps } from "../article-page-header";

interface Props extends ArticleHeaderProps {
	title: string;
	children: React.ReactNode;
	image?: FixedImage;
}

export const ArticlePageLayout = ({
	children,
	image,
	date,
	authorLink,
	tags,
	title,
	authorName,
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
			{children}
		</ViewContent>
	);
};
