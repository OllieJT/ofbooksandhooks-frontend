import style from "./styles.module.scss";
import Link from "next/link";
import { handleStyleState } from "@lib/utility/handle-style-state";
import { useRouter } from "next/router";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

export interface GlobalMenuItemProps {
	label: string;
	href?: string;
	icon?: React.ReactNode;
	isExternal?: boolean;
}
export const GlobalMenuItem = (props: GlobalMenuItemProps): React.ReactElement => {
	const router = useRouter();

	function isActiveLink(page: string, link: string) {
		switch (page) {
			case link:
				return true;
			default:
				return false;
		}
	}
	const linkState = props.href && handleStyleState(isActiveLink(router.asPath, props.href));

	const inner = (
		<p>
			{props.icon && <span>{props.icon}</span>}
			<span>{props.label}</span>
		</p>
	);

	return props.href ? (
		<Link href={props.href} passHref>
			<a
				className={style.link}
				data-state={linkState}
				target={props.isExternal ? "_blank" : undefined}
			>
				{inner}
			</a>
		</Link>
	) : (
		<div className={style.link} data-state={linkState}>
			{inner}
		</div>
	);
};

export interface GlobalMenuToggleProps {
	isOpen: boolean;
	toggleMenu: () => void;
}
export const GlobalMenuToggle = (props: GlobalMenuToggleProps): React.ReactElement => {
	const buttonState = handleStyleState(props.isOpen);

	return (
		<button
			className={style.toggle}
			onClick={props.toggleMenu}
			aria-label={props.isOpen ? "Close Menu" : "Open Menu"}
			data-state={buttonState}
			data-type="button"
		>
			{props.isOpen ? <RiCloseFill /> : <RiMenuFill />}
		</button>
	);
};
