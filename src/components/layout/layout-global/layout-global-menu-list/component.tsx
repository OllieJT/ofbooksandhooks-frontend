import style from "./styles.module.scss";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

export interface GlobalMenuLinkProps {
	label: string;
	icon?: React.ReactNode;

	link: string;
	isActive?: boolean;
}

interface Props {
	links: GlobalMenuLinkProps[];
}

const GlobalMenuList = ({ links }: Props): React.ReactElement => {
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
			<button
				className={style.toggle}
				onClick={toggleMenu}
				aria-label={isOpen ? "Close Menu" : "Open Menu"}
				data-state={handleStyleState(isOpen)}
			>
				{isOpen ? <RiCloseFill /> : <RiMenuFill />}
			</button>
			<Link href="/" passHref>
				<a
					className={style.masthead}
					data-state={handleStyleState(router.asPath === "/")}
				>
					<p>Of Books & Hooks</p>
				</a>
			</Link>

			<ul className={style.menu} data-state={handleStyleState(isOpen)}>
				{links.map(({ label, link, icon }) => {
					const isActive =
						router.asPath === link ??
						(link === "/articles" && router.asPath === "/");

					return (
						<li key={label + link}>
							<Link href={link} passHref>
								<a
									className={style.link}
									data-state={handleStyleState(isActive)}
								>
									<p className={icon ? style.icon : style.text}>
										{icon && <span>{icon}</span>}
										<span>{label}</span>
									</p>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export const GlobalMenuListComponent = memo(GlobalMenuList);
