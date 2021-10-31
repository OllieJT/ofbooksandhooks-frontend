import style from "./styles.module.scss";
import Link from "next/link";

export interface GlobalMenuLinkProps {
	label: string;
	icon?: React.ReactNode;

	link: string;
	isActive?: boolean;
}

export const GlobalMenuLink = ({
	label,
	icon,
	link,
	isActive,
}: GlobalMenuLinkProps): React.ReactElement => {
	return (
		<Link href={link} passHref>
			<a className={`${style.link} ${isActive ? style.active : ""}`}>
				{icon && <p className={style.icon}>{icon}</p>}
				<p className={`${style.label} ${!!icon ? style.withIcon : ""}`}>{label}</p>
			</a>
		</Link>
	);
};
