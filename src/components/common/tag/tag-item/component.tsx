import style from "./styles.module.scss";

import Link from "next/link";
import type { ThemeClass } from "@lib/utility/handle-theme-color";

export interface TagProps {
	label: string;
	linkTo?: string;
	isExternal?: boolean;
	theme?: ThemeClass;
}

export const Tag = ({ label, linkTo, theme = "theme-green", isExternal }: TagProps) => {
	return (
		<p className={`${style.container} ${theme}`}>
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
