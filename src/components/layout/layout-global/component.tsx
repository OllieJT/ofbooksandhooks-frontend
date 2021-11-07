import style from "./styles.module.scss";
import { useScrollPercentage } from "react-scroll-percentage";
import { RiArrowUpLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { GlobalMenuList } from "./layout-global-menu";

interface Props {
	children: React.ReactNode;
}

export const LayoutGlobal = ({ children }: Props): React.ReactElement => {
	const [ref, scrollPercentage] = useScrollPercentage({ threshold: 0 });

	const show = scrollPercentage >= 0.33;

	return (
		<>
			<nav className={style.navbar}>
				<GlobalMenuList />

				<div className={style.masthead}>
					<Link href="/" passHref>
						<a>
							<Image
								src="/logo.svg"
								width={67}
								height={80}
								alt="The Of Books And Hooks logo is an Ampersand made of circles and a crochet hook."
							/>
						</a>
					</Link>
				</div>
			</nav>

			<main id="top" className={style.main} ref={ref}>
				{children}
			</main>

			<div className={style.background} />

			<a
				style={{
					transform: `translateY(${show ? "0" : "100%"})`,
					opacity: show ? 1 : 0,
				}}
				className={style.scrolltop}
				href="#top"
			>
				<RiArrowUpLine />
			</a>
		</>
	);
};
