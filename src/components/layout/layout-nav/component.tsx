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
		label: "Articles",
		link: "/articles",
	},
	{
		label: "Of Books",
		link: "/articles",
	},
	{
		label: "Of Hooks",
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
			<div className={style.logo}>
				<LayoutLogo />
			</div>

			<div className={style.menu}>
				<LayoutNavLinkList links={menuLinks} justify={JustifyMenu.Start} />
			</div>

			<div className={style.platforms}>
				<LayoutNavLinkList links={platformLinks} justify={JustifyMenu.End} />
			</div>
		</nav>
	);
};
