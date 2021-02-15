import style from "./styles.module.scss";

import Link from "next/link";
import { Theme, handleThemeClass } from "../../../utility/handle-theme-color";

export interface TagProps {
	label: string;
	linkTo?: string;
	isExternal?: boolean;
	theme?: Theme;
}

export const Tag = ({ label, linkTo, theme = Theme.None, isExternal }: TagProps) => {
	const themeClass = handleThemeClass(theme);

	return (
		<p className={`${style.container} ${themeClass}`}>
			{!!linkTo ? (
				<Link href={linkTo} passHref>
					<a className={style.inner} target={isExternal ? "_blank" : ""}>
						{label}
					</a>
				</Link>
			) : (
				<span className={style.inner}>{label}</span>
			)}
		</p>
	);
};
