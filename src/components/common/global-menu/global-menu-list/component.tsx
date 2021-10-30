import { GlobalMenuLink, GlobalMenuLinkProps } from "../global-menu-link";
import style from "./styles.module.scss";
import { memo } from "react";
import { useRouter } from "next/router";

interface Props {
	links: GlobalMenuLinkProps[];
	isOpen: boolean;
}

const GlobalMenuList = ({ links, isOpen }: Props): React.ReactElement => {
	const { asPath } = useRouter();
	const menuClassName = isOpen ? `${style.menu} ${style.open}` : style.menu;

	return (
		<div className={menuClassName}>
			<ul className={style.list}>
				{links.map(({ label, link, icon }) => {
					const isActive =
						asPath === link || (link === "/articles" && asPath === "/");

					return (
						<li className={style.item} key={label + link}>
							<GlobalMenuLink
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
export const GlobalMenuListComponent = memo(GlobalMenuList);
