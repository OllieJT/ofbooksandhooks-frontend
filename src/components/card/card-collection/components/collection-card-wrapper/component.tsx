import { handleThemeClass, Theme } from "@lib/utility/handle-theme-color";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
	theme?: Theme;
}

export const CollectionCardWrapper = (props: Props) => {
	const themeClass = handleThemeClass(props.theme);
	const classNames = [style.wrapper, themeClass].join(" ");

	return <article className={classNames}>{props.children}</article>;
};
