import { useSettings } from "../../../providers/settings";
import { resolveSocialIcon } from "../../../utility/resolve-platform";
import { LayoutLogo } from "../layout-logo";
import { LayoutNavLinkItemProps } from "../layout-nav-link-item";
import { JustifyMenu, LayoutNavLinkList } from "../layout-nav-link-list";
import style from "./styles.module.scss";
import { useEffect, useState } from "react";
import { LayoutNavToggle } from "../layout-nav-toggle";
import { useRouter } from "next/router";

const menuLinks: LayoutNavLinkItemProps[] = [
	{
		label: "Home",
		link: "/articles",
	},
	{
		label: "Of Books",
		link: "/topics/books",
	},
	{
		label: "Of Hooks",
		link: "/topics/hooks",
	},
	{
		label: "Collections",
		link: "/collections",
	},
];

export const LayoutNav = (): React.ReactElement => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const settings = useSettings();
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", () => setMenuOpen(false));
		return () => router.events.off("routeChangeStart", () => setMenuOpen(false));
	}, []);

	const toggleMenu = () => setMenuOpen(!isMenuOpen);

	const platformLinks: LayoutNavLinkItemProps[] =
		settings.profile.platforms?.map((platform) => {
			const Icon = resolveSocialIcon(platform.platform);
			return {
				label: <Icon />,
				link: platform.url,
			};
		}) || [];

	return (
		<nav className={style.container}>
			<div className={style.logo}>
				<LayoutLogo />
			</div>

			<div className={`${style.menu} ${isMenuOpen ? style.open : style.closed}`}>
				<LayoutNavLinkList links={menuLinks} justify={JustifyMenu.End} />
			</div>

			<div
				className={`${style.platforms} ${
					isMenuOpen ? style.open : style.closed
				}`}
			>
				<LayoutNavLinkList links={platformLinks} justify={JustifyMenu.End} />
			</div>

			<LayoutNavToggle isOpen={isMenuOpen} handleClick={toggleMenu} />
		</nav>
	);
};
