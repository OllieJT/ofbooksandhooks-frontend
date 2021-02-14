import style from "./styles.module.scss";
import Link from "next/link";

export interface LayoutNavLinkItemProps {
	label: React.ReactNode;
	link: string;
	isActive?: boolean;
}

export const LayoutNavLinkItem = ({
	label,
	link,
	isActive,
}: LayoutNavLinkItemProps): React.ReactElement => {
	return (
		<Link href={link} passHref>
			<a className={`${style.link} ${isActive ? style.active : ""}`}>
				<p className={style.label}>{label}</p>
			</a>
		</Link>
	);
};
