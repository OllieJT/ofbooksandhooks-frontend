import style from "./styles.module.scss";

export const ExampleComponent = (): React.ReactElement => {
	return (
		<div className={style.container}>
			<h1>Next.js</h1>
			<p>with CSS</p>
		</div>
	);
};
