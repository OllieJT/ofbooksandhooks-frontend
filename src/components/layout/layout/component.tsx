import { LayoutScrollUp } from "../layout-scrollup";
import { LayoutNav } from "../layout-nav";
import style from "./styles.module.scss";
import { useScrollPercentage } from "react-scroll-percentage";

interface Props {
	children: React.ReactNode;
}

export const Layout = ({ children }: Props): React.ReactElement => {
	const [ref, percentage] = useScrollPercentage({
		threshold: 0,
	});

	return (
		<div className={style.container} ref={ref}>
			<LayoutNav />
			<main id="top" className={style.main}>
				{children}
			</main>
			<div className={style.background} />
			<LayoutScrollUp percentage={percentage} />
		</div>
	);
};
