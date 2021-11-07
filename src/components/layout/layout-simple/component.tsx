import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

export const LayoutSimple = ({ children }: Props): React.ReactElement => {
	return <div className={style.container}>{children}</div>;
};
