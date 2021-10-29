import { LayoutLogo } from "../layout-logo";
import type { LayoutNavLinkItemProps } from "../layout-nav-link-item";
import { JustifyMenu, LayoutNavLinkList } from "../layout-nav-link-list";
import style from "./styles.module.scss";
import { LayoutNavToggle } from "../layout-nav-toggle";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
	menuLinks: LayoutNavLinkItemProps[];
	platformLinks: LayoutNavLinkItemProps[];
}

const LayoutNav = ({ menuLinks, platformLinks }: Props): React.ReactElement => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", () => setIsOpen(false));
		return () => router.events.off("routeChangeStart", () => setIsOpen(false));
	}, [router.events]);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className={`${style.container}  ${isOpen ? style.open : ""}`}>
			<div className={style.logo}>
				<LayoutLogo />
			</div>

			<LayoutNavLinkList
				menuClass={style.menu}
				links={[...menuLinks, ...platformLinks]}
				justify={JustifyMenu.End}
				isOpen={isOpen}
			/>

			<LayoutNavToggle isOpen={isOpen} onClick={toggleMenu} />
		</nav>
	);
};

export const LayoutNavComponent = memo(LayoutNav);
