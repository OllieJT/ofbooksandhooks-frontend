import { resolveSocialIcon } from "../../../utility/resolve-platform";
import { LayoutEditor } from "../layout-editor";
import { JustifyMenu, LayoutMenu, MenuLinkProps } from "../layout-nav-menu";
import style from "./styles.module.scss";

const Etsy = resolveSocialIcon("etsy");
const Pinterest = resolveSocialIcon("pinterest");

interface Props {
	children: React.ReactNode;
}

const menuLinks: MenuLinkProps[] = [
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
		label: "All",
		link: "/articles",
	},
];

const platformLinks: MenuLinkProps[] = [
	{
		label: <Etsy />,
		link: "/etsy",
	},
	{
		label: <Pinterest />,
		link: "/pinterest",
	},
];

export const Layout = ({ children }: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<nav className={style.menu}>
				<LayoutMenu links={menuLinks} />
			</nav>
			<div className={style.platforms}>
				<LayoutMenu links={platformLinks} justify={JustifyMenu.End} />
			</div>
			{/* <LayoutPlatforms links={platformLinks} /> */}
			<main className={style.main}>{children}</main>
			<div className={style.logo}>
				<img
					src="/logo.svg"
					width={133}
					height={160}
					alt="Of Books And Hooks Ampersand made of circled and a crochet hook."
				/>
			</div>
			<div className={style.background} />
			<LayoutEditor />
		</div>
	);
};
