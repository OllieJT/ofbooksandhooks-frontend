import { handleThemeClass, Theme } from "../../../../../utility/handle-theme-color";
import style from "./styles.module.scss";

export interface CardWrapperProps {
	children: React.ReactNode;
	theme?: Theme;
}

export const ArticleCardWrapper = (props: CardWrapperProps) => {
	const themeClass = handleThemeClass(props.theme);
	const classNames = [style.wrapper, themeClass].join(" ");

	return <article className={classNames}>{props.children}</article>;
};
