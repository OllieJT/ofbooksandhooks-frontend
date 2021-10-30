import type { ButtonProps } from "../types";
import style from "./styles.module.scss";

type Props = ButtonProps<{
	label: string;
	icon: React.ReactNode;
}>;

export const ButtonIcon = ({
	isActive,
	isLoading,
	onClick: handleClick,
	resting,
	active,
}: Props): React.ReactElement => {
	const className = isActive ? `${style.container} ${style.open}` : style.container;
	const label = active && isActive ? active.label : resting.label;
	const icon = active && isActive ? active.icon : resting.icon;

	return (
		<button
			className={className}
			onClick={handleClick}
			aria-label={isLoading ? "Loading..." : label}
			disabled={isLoading}>
			{icon}
		</button>
	);
};
