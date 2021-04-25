import { useSettings } from "../../../providers/settings";
import { resolveSocialIcon } from "../../../utility/resolve-platform";
import { LayoutLogo } from "../layout-logo";
import { LayoutNavLinkItemProps } from "../layout-nav-link-item";
import { JustifyMenu, LayoutNavLinkList } from "../layout-nav-link-list";
import style from "./styles.module.scss";

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
	const settings = useSettings();

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

			<div className={style.menu}>
				<LayoutNavLinkList links={menuLinks} justify={JustifyMenu.Start} />
			</div>

			<div className={style.platforms}>
				<LayoutNavLinkList links={platformLinks} justify={JustifyMenu.End} />
			</div>
		</nav>
	);
};
