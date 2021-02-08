import style from "./styles.module.scss";

import Link from "next/link";
import { Theme } from "../../utility/handle-theme-color";

export interface TagProps {
	label: string;
	link?: string;
	isExternal?: boolean;
	theme?: Theme;
}

export const Tag = ({ label, link, theme = Theme.Default, isExternal }: TagProps) => {
	return (
		<p className={style.container}>
			{!!link ? (
				<Link href={link} passHref>
					<a target={isExternal ? "_blank" : ""}>{label}</a>
				</Link>
			) : (
				<span>{label}</span>
			)}
		</p>
	);
};
