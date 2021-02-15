import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
	sidebar?: React.ReactNode;
}

export const ViewSidebar = ({ sidebar, children }: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<div className={style.content}>{children}</div>
			<aside className={style.sidebar}>{sidebar}</aside>
		</div>
	);
};
