import style from "./styles.module.scss";

interface Props {
	onClick: () => void;
	isLoading: boolean;
}

export const LoadMore = ({ onClick: handleClick, isLoading }: Props) => (
	<div className={style.wrapper}>
		<button
			className={`${style.button} ${isLoading && style.loading}`}
			onClick={handleClick}
		>
			{isLoading ? "Loading" : "Load More"}
		</button>
	</div>
);
