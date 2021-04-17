import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

export const ViewNaked = ({ children }: Props): React.ReactElement => {
	return <div className={style.container}>{children}</div>;
};
