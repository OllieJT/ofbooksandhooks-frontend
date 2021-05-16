import style from "./styles.module.scss";
import Link from "next/link";

export interface LayoutNavLinkItemProps {
	label: string;
	icon?: React.ReactNode;
	link: string;
	isActive?: boolean;
}

export const LayoutNavLinkItem = ({
	label,
	icon,
	link,
	isActive,
}: LayoutNavLinkItemProps): React.ReactElement => {
	return (
		<Link href={link} passHref>
			<a className={`${style.link} ${isActive ? style.active : ""}`}>
				{icon && <p className={style.icon}>{icon}</p>}
				<p className={`${style.label} ${!!icon ? style.withIcon : ""}`}>
					{label}
				</p>
			</a>
		</Link>
	);
};

export interface LayoutNavLinkButtonProps {
	label: string;
	icon?: React.ReactNode;
	onClick: () => void;
}

export const LayoutNavLinkButton = ({
	label,
	icon,
	onClick: handleClick,
}: LayoutNavLinkButtonProps): React.ReactElement => {
	return (
		<button onClick={handleClick} className={style.link}>
			{icon && <p className={style.icon}>{icon}</p>}
			<p className={`${style.label} ${!!icon ? style.withIcon : ""}`}>{label}</p>
		</button>
	);
};
