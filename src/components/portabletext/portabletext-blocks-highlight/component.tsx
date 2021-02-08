import { ContentMin, Highlight } from "../../../lib/schema";
import { Theme } from "../../../utility/handle-theme-color";
import { PortableText } from "..";
import style from "./styles.module.scss";

interface Props {
	title: string;
	theme: Theme;
	type: "fill" | "outline";
	content?: ContentMin;
}

export const BlockHighlight = ({ title, type, theme, content }: Props) => {
	return (
		<section className={style.container}>
			<header>
				<h6>{title}</h6>
				<p>
					{type} + {theme}
				</p>
			</header>
			<PortableText blocks={content} />
		</section>
	);
};
