import { handleThemeClass, ThemeClass } from "@lib/utility/handle-theme-color";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
	theme?: ThemeClass;
}

export const CollectionCardWrapper = (props: Props) => {
	const themeClass = handleThemeClass(props.theme);
	const classNames = [style.wrapper, themeClass].join(" ");

	return <article className={classNames}>{props.children}</article>;
};
