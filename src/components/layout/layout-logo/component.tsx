import style from "./styles.module.scss";

interface Props {
	linkTo?: string;
}

export const LayoutLogo = ({ linkTo = "/" }: Props): React.ReactElement => {
	return (
		<a className={style.container} href={linkTo}>
			<img
				src="/logo.svg"
				width={67}
				height={80}
				alt="Of Books And Hooks Ampersand made of circles and a crochet hook."
			/>
		</a>
	);
};
