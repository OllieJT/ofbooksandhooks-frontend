import style from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ButtonIcon } from "@components/button/button-icon";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { GlobalMenuList } from "../layout-global-menu-list";

export const GlobalMenu = (): React.ReactElement => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const containerClassName = isOpen ? `${style.container} ${style.open}` : style.container;

	useEffect(() => {
		router.events.on("routeChangeStart", () => setIsOpen(false));
		return () => router.events.off("routeChangeStart", () => setIsOpen(false));
	}, [router.events]);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className={containerClassName}>
			<Link href="/">
				<a className={style.logo}>
					<Image src="/logo.svg" width={67} height={80} alt="Of Books And Hooks Ampersand made of circles and a crochet hook." />
				</a>
			</Link>

			<GlobalMenuList isOpen={isOpen} />

			<ButtonIcon
				isActive={isOpen}
				onClick={toggleMenu}
				resting={{
					label: "Open Menu",
					icon: <RiMenuFill />,
				}}
				active={{
					label: "Close Menu",
					icon: <RiCloseFill />,
				}}
			/>
		</nav>
	);
};
