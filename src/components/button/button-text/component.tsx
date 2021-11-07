import { handleThemeClass, ThemeOption } from "@lib/utility/handle-theme-color";
import style from "./styles.module.scss";

export interface ButtonProps {
	onClick: () => void;
	isActive?: boolean;
	isLoading?: boolean;
	label: string;
	theme?: ThemeOption;
}

export const ButtonText = ({
	isActive,
	isLoading,
	onClick: handleClick,
	label,
	theme,
}: ButtonProps) => {
	const buttonState = isLoading ? "loading" : isActive ? "active" : "resting";
	const classNames = [style.button, theme ? handleThemeClass(theme) : ""].join(" ");

	return (
		<button
			className={classNames}
			onClick={handleClick}
			disabled={isLoading}
			data-state={buttonState}
		>
			{isLoading ? "Loading..." : label}
		</button>
	);
};
