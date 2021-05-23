import style from "./styles.module.scss";
import {
	LayoutNavLinkItemProps,
	LayoutNavLinkItem,
	LayoutNavLinkAdmin,
} from "../layout-nav-link-item";
import { useRouter } from "next/router";
import { useCurrentUser } from "../../../lib/sanity";

export enum JustifyMenu {
	Start = "flex-start",
	End = "flex-end",
}

export interface LayoutNavLinkListProps {
	justify?: JustifyMenu;
	links: LayoutNavLinkItemProps[];
	isOpen: boolean;
	menuClass: string;
}

export const LayoutNavLinkList = ({
	justify = JustifyMenu.Start,
	links,
	isOpen,
	menuClass,
}: LayoutNavLinkListProps): React.ReactElement => {
	const { asPath } = useRouter();

	const { data: currentUser } = useCurrentUser();

	const admin = currentUser &&
		currentUser.profileImage &&
		currentUser.name && {
			profileImage: currentUser?.profileImage,
			name: currentUser?.name,
		};

	return (
		<div className={`${style.container} ${menuClass} ${isOpen ? style.open : ""}`}>
			<ul className={style.list} style={{ justifyContent: justify }}>
				{admin && (
					<li className={style.item}>
						<LayoutNavLinkAdmin
							label="Admin"
							link="https://ofbooksandhooks.sanity.studio/desk"
							image={admin.profileImage}
							imageAlt={admin.name}
						/>
					</li>
				)}
				{links.map(({ label, link, icon }) => {
					const isActive =
						asPath === link || (link === "/articles" && asPath === "/");

					return (
						<li className={style.item} key={label + link}>
							<LayoutNavLinkItem
								label={label}
								link={link}
								icon={icon}
								isActive={isActive}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
