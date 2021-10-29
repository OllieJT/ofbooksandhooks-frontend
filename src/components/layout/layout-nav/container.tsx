import { useSettings } from "@lib/providers/settings";
import { resolveSocialIcon } from "@lib/utility/resolve-platform";
import type { LayoutNavLinkItemProps } from "../layout-nav-link-item";
import { LayoutNavComponent } from "./component";

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
				label: platform.platform,
				icon: <Icon />,
				link: platform.url,
			};
		}) || [];

	return <LayoutNavComponent menuLinks={menuLinks} platformLinks={platformLinks} />;
};
