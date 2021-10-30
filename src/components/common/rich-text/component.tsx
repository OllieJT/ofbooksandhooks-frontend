import type { Richtext } from "@lib/groq";
import { PortableText } from "@components/portabletext";
import style from "./styles.module.scss";

interface Props {
	content?: Richtext;
}

export const RichText = ({ content }: Props) => {
	return (
		<div className={style.content}>
			<PortableText blocks={content} />
		</div>
	);
};
