import style from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSettings } from "@lib/providers/settings";
import { GlobalMenuItem, GlobalMenuToggle } from "../global-menu-item";

export const GlobalMenuList = (): React.ReactElement => {
	const { menu } = useSettings();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		router.events.on("routeChangeStart", () => setIsOpen(false));
		return () => router.events.off("routeChangeStart", () => setIsOpen(false));
	}, [router.events]);

	const toggleMenu = () => setIsOpen(!isOpen);
	const handleStyleState = (isActive: boolean) => (isActive ? "active" : "resting");

	const containerClassName = isOpen ? `${style.container} ${style.open}` : style.container;

	return (
		<div className={containerClassName}>
			<GlobalMenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />

			<GlobalMenuItem label="Of Books & Hooks" href="/" />

			<div className={style.spacer} />

			<ul className={style.menu} data-state={handleStyleState(isOpen)}>
				{menu.links.map((props) => (
					<li key={props.label + props.href}>
						<GlobalMenuItem {...props} />
					</li>
				))}
			</ul>

			{menu.pinned && <GlobalMenuItem {...menu.pinned} />}
		</div>
	);
};
