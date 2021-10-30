import type { ButtonProps } from "../types";
import style from "./styles.module.scss";

type Props = ButtonProps<{
	label: string;
}>;

export const ButtonText = ({
	isActive,
	isLoading,
	onClick: handleClick,
	resting,
	active,
}: Props) => {
	const className = isActive ? `${style.container} ${style.open}` : style.container;
	const label = active && isActive ? active.label : resting.label;

	return (
		<div className={className}>
			<button
				className={`${style.button} ${isLoading && style.loading}`}
				onClick={handleClick}
				disabled={isLoading}>
				{isLoading ? "Loading" : label}
			</button>
		</div>
	);
};
