import { resolveSocialIcon } from "../../../utility/resolve-platform";
import { LayoutLogo } from "../layout-logo";
import { LayoutNavLinkItemProps } from "../layout-nav-link-item";
import { JustifyMenu, LayoutNavLinkList } from "../layout-nav-link-list";
import style from "./styles.module.scss";

const Etsy = resolveSocialIcon("etsy");
const Pinterest = resolveSocialIcon("pinterest");

const menuLinks: LayoutNavLinkItemProps[] = [
	{
		label: "Home",
		link: "/",
		isActive: true,
	},
	{
		label: "Of Books",
		link: "/books",
	},
	{
		label: "Of Hooks",
		link: "/hooks",
	},
	{
		label: "Articles",
		link: "/articles",
	},
];

const platformLinks: LayoutNavLinkItemProps[] = [
	{
		label: <Etsy />,
		link: "/etsy",
	},
	{
		label: <Pinterest />,
		link: "/pinterest",
	},
];

export const LayoutNav = (): React.ReactElement => {
	return (
		<nav className={style.container}>
			<LayoutLogo />

			<LayoutNavLinkList links={menuLinks} justify={JustifyMenu.Start} />
			<LayoutNavLinkList links={platformLinks} justify={JustifyMenu.End} />
		</nav>
	);
};
