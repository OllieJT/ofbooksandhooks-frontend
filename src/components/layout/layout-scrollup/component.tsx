import style from "./styles.module.scss";
import { RiArrowUpLine } from "react-icons/ri";

interface Props {
	percentage: number;
}

export const LayoutScrollUp = ({ percentage }: Props) => {
	const show = percentage >= 0.33;
	return (
		<a
			style={{
				transform: `translateY(${show ? "0" : "100%"})`,
				opacity: show ? 1 : 0,
			}}
			className={style.container}
			href="#top"
		>
			<RiArrowUpLine />
		</a>
	);
};
