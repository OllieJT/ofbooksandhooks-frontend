import { useSettings } from "@lib/providers/settings";
import { resolveSocialIcon } from "@lib/utility/resolve-platform";
import { GlobalMenuLinkProps, GlobalMenuListComponent } from "./component";

const menuLinks: GlobalMenuLinkProps[] = [
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

export const GlobalMenuList = (): React.ReactElement => {
	//TODO:Move links to sanity settings
	const settings = useSettings();

	const platformLinks: GlobalMenuLinkProps[] =
		settings.profile.platforms?.map((platform) => {
			const Icon = resolveSocialIcon(platform.platform);
			return {
				label: platform.platform,
				icon: <Icon />,
				link: platform.url,
			};
		}) || [];

	const links = [...menuLinks, ...platformLinks];

	return <GlobalMenuListComponent links={links} />;
};
