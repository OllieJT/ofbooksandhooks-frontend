import style from "./styles.module.scss";
import Link from "next/link";

export enum JustifyMenu {
	Start = "flex-start",
	End = "flex-end",
}

export interface MenuLinkProps {
	label: React.ReactNode;
	link: string;
	isActive?: boolean;
}
interface MenuProps {
	justify?: JustifyMenu;
	links: MenuLinkProps[];
}

export const LayoutMenu = ({
	justify = JustifyMenu.Start,
	links,
}: MenuProps): React.ReactElement => {
	return (
		<ul className={style.list} style={{ justifyContent: justify }}>
			{links.map(({ label, link, isActive }) => (
				<li className={style.item} key={label + link}>
					<Link href={link} passHref prefetch>
						<a className={`${style.link} ${isActive ? style.active : ""}`}>
							<p>{label}</p>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
