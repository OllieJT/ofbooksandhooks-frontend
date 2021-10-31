import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { GlobalMenuList } from "../layout-global-menu-list";

export const GlobalMenu = (): React.ReactElement => {
	//TODO: Add Links page to menu on mobile and desktop

	return (
		<nav className={style.container}>
			<GlobalMenuList />

			<Link href="/">
				<a className={style.logo}>
					<Image
						src="/logo.svg"
						width={67}
						height={80}
						alt="Of Books And Hooks Ampersand made of circles and a crochet hook."
					/>
				</a>
			</Link>
		</nav>
	);
};
