import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	linkTo?: string;
}

export const LayoutLogo = ({ linkTo = "/" }: Props): React.ReactElement => {
	return (
		<a className={style.container} href={linkTo}>
			<Image
				src="/logo.svg"
				width={67}
				height={80}
				alt="Of Books And Hooks Ampersand made of circles and a crochet hook."
			/>
		</a>
	);
};
