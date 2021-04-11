import { Richtext } from "../../../lib/schema";
import { PortableText } from "../../portabletext";
import style from "./styles.module.scss";

interface Props {
	content?: Richtext;
}

export const ArticlePageContent = ({ content }: Props) => {
	return (
		<div className={style.content}>
			<PortableText blocks={content} />
		</div>
	);
};
