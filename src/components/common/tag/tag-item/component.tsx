import style from "./styles.module.scss";

import Link from "next/link";
import type { ThemeClass } from "@lib/utility/handle-theme-color";

export interface TagProps {
	label: string;
	value: string;
	href?: string;
	theme?: ThemeClass;
}

export const Tag = (props: TagProps) => {
	const classNames = [style.container, props.theme].join(" ");
	//console.log(props);

	return (
		<p className={classNames}>
			{!!props.href ? (
				<Link href={props.href} passHref>
					<a className={style.inner}>{props.label}</a>
				</Link>
			) : (
				<span className={style.inner}>{props.label}</span>
			)}
		</p>
	);
};
