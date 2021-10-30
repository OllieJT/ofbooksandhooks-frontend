import style from "./styles.module.scss";
import { useScrollPercentage } from "react-scroll-percentage";
import { GlobalMenu } from "@components/common/global-menu";
import { RiArrowUpLine } from "react-icons/ri";

interface Props {
	children: React.ReactNode;
}

export const LayoutGlobal = ({ children }: Props): React.ReactElement => {
	const [ref, scrollPercentage] = useScrollPercentage({
		threshold: 0,
	});

	const show = scrollPercentage >= 0.33;

	return (
		<div className={style.container} ref={ref}>
			<GlobalMenu />
			<main id="top" className={style.main}>
				{children}
			</main>
			<div className={style.background} />

			<a
				style={{
					transform: `translateY(${show ? "0" : "100%"})`,
					opacity: show ? 1 : 0,
				}}
				className={style.scrolltop}
				href="#top">
				<RiArrowUpLine />
			</a>
		</div>
	);
};
