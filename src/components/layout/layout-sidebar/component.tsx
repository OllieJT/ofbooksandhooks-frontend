import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
	sidebar?: React.ReactNode;
}

export const LayoutSidebar = ({ sidebar, children }: Props): React.ReactElement => {
	//TODO: Handle sidebar override better
	return (
		<div className={style.container}>
			<div className={style.content}>{children}</div>
			<aside className={style.sidebar}>{sidebar}</aside>
		</div>
	);
};
