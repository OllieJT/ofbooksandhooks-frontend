import style from "./styles.module.scss";
import { TagList, TagProps } from "../../common/tag";
import { handleThemeClass } from "@lib/utility/handle-theme-color";
import type { Theme } from "@lib/groq";

export interface TitleProps {
	title: string;
	subtitle?: string;
	tags?: TagProps[];
	theme?: Theme;
}

export const HeaderPage = ({ title, subtitle, tags, theme }: TitleProps) => {
	const allTags = tags?.filter((x) => !!x);
	const themeClass = handleThemeClass(handleThemeClass(theme));

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
