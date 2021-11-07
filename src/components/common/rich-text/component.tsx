import style from "./styles.module.scss";

interface Props {
	constrain?: boolean;
	children: React.ReactNode;
}

export const RichText = ({ children, constrain }: Props) => {
	const classNames = constrain ? `${style.container} ${style.constrain}` : style.container;
	return <div className={classNames}>{children}</div>;
};
