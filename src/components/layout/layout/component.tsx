import { Platform } from "../../../lib/schema";
import { LayoutMenu } from "../layout-menu";
import { LayoutPlatforms } from "../layout-platforms";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

const menuLinks = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "Of Books",
		link: "/",
	},
	{
		label: "Of Hooks",
		link: "/",
	},
	{
		label: "All",
		link: "/articles",
	},
];

const platformLinks: Platform[] = [
	{
		_type: "platform",
		link: {
			_type: "linkExternal",
			url: "/",
		},
		name: "etsy",
	},
	{
		_type: "platform",
		link: {
			_type: "linkExternal",
			url: "/",
		},
		name: "pinterest",
	},
];

export const Layout = ({ children }: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<main className={style.main}>{children}</main>
			<nav className={style.nav}>
				<LayoutMenu links={menuLinks} />
				<LayoutPlatforms links={platformLinks} />
			</nav>
			<div className={style.logo}>
				<img
					src="/logo.svg"
					width={133}
					height={160}
					alt="Of Books And Hooks Ampersand made of circled and a crochet hook."
				/>
			</div>
		</div>
	);
};
