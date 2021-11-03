import { Icon } from "@components/common/icon";
import type { MenuLink } from "@lib/providers/settings";
import { resolveUrl } from "@lib/utility/resolve-url";
import type { GlobalMenuItemProps } from "..";

export const handleMenuLink = (link: MenuLink): GlobalMenuItemProps => {
	if (link._type === "navigation_link_internal") {
		let slug = "";
		switch (link.page._type) {
			case "article":
			case "collection":
			case "person":
				slug = link.page.slug.current;
				break;
			case "linkpage":
			case "homepage":
			default:
				slug = "";
				break;
		}
		return {
			label: link.title,
			href: resolveUrl({ slug, type: link.page._type }),
			isExternal: false,
			icon: link.icon ? (
				<Icon name={link.icon.name} provider={link.icon.provider} />
			) : undefined,
		};
	} else {
		return {
			label: link.title,
			href: link.href,
			isExternal: true,
			icon: link.icon ? (
				<Icon name={link.icon.name} provider={link.icon.provider} />
			) : undefined,
		};
	}
};
