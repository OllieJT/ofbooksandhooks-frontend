import style from "./styles.module.scss";
import { handleThemeClass, Theme } from "../../../../utility/handle-theme-color";

export interface CardWrapperProps {
	children: React.ReactNode;
	theme?: Theme;
}

export const CardWrapper = ({ children, theme = Theme.Default }: CardWrapperProps) => {
	const themeClass = handleThemeClass(theme);

	return <article className={`${style.container} ${themeClass}`}>{children}</article>;
};
