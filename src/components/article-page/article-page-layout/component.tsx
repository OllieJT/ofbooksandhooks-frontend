import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

export const ArticleLayout = ({ children }: Props) => {
	return <article className={style.container}>{children}</article>;
};
