import { LayoutEditor } from "../layout-editor";
import { LayoutNav } from "../layout-nav";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

export const Layout = ({ children }: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<LayoutNav />
			<main className={style.main}>{children}</main>
			<div className={style.background} />
			<LayoutEditor />
		</div>
	);
};
