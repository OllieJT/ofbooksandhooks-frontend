import style from "./styles.module.scss";
import { LayoutNavLinkItemProps, LayoutNavLinkItem } from "../layout-nav-link-item";

export enum JustifyMenu {
	Start = "flex-start",
	End = "flex-end",
}

export interface LayoutNavLinkListProps {
	justify?: JustifyMenu;
	links: LayoutNavLinkItemProps[];
}

export const LayoutNavLinkList = ({
	justify = JustifyMenu.Start,
	links,
}: LayoutNavLinkListProps): React.ReactElement => {
	return (
		<ul className={style.list} style={{ justifyContent: justify }}>
			{links.map(({ label, link, isActive }) => (
				<li className={style.item} key={label + link}>
					<LayoutNavLinkItem label={label} link={link} isActive={isActive} />
				</li>
			))}
		</ul>
	);
};
