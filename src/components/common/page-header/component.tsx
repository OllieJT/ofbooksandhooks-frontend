import style from "./styles.module.scss";
import { TagList, TagProps } from "../tag";
import { handleThemeClass, handleThemeColor } from "@lib/utility/handle-theme-color";
import type { Theme } from "@lib/groq";

export interface TitleProps {
	title: string;
	subtitle?: string;
	tags?: TagProps[];
	theme?: Theme;
}

export const PageHeader = ({ title, subtitle, tags, theme }: TitleProps) => {
	const allTags = tags?.filter((x) => !!x);
	const themeClass = handleThemeClass(handleThemeColor(theme));

	return (
		<header className={`${style.container} ${themeClass}`}>
			<h1 className={style.title}>{title}</h1>
			{subtitle && <h6 className={style.author}>{subtitle}</h6>}
			{allTags && (
				<div className={style.metadata}>
					<TagList tags={allTags} />
				</div>
			)}
		</header>
	);
};
