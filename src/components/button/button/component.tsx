import style from "./styles.module.scss";

interface Props {
	onClick: () => void;
	isLoading?: boolean;
	label: string;
}

export const Button = ({ onClick: handleClick, isLoading = false, label }: Props) => (
	<div className={style.wrapper}>
		<button
			className={`${style.button} ${isLoading && style.loading}`}
			onClick={handleClick}
		>
			{isLoading ? "Loading" : label}
		</button>
	</div>
);
