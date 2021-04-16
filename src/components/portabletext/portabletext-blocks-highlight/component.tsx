import { Theme, handleThemeClass } from "../../../utility/handle-theme-color";
import { PortableText } from "..";
import style from "./styles.module.scss";
import { ContentMin } from "../../../lib/groq";

interface Props {
	title: string;
	theme: Theme;
	type: "fill" | "outline";
	content?: ContentMin;
}

const handleHighlightType = (type: string) => {
	if (type === "outline") {
		return style.outline;
	}
	return style.fill;
};

export const BlockHighlight = ({ title, type, theme, content }: Props) => {
	const themeClass = handleThemeClass(theme);

	return (
		<section
			className={`${themeClass} ${style.container} ${handleHighlightType(type)}`}
		>
			<h6 className={style.title}>{title}</h6>
			<PortableText blocks={content} />
		</section>
	);
};
