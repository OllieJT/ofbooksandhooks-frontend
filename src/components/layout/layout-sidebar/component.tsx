import { CardAuthor } from "@components/card/card-author";
import { TagList } from "@components/common/tag";
import { useSettings } from "@lib/providers/settings";
import { memo } from "react";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

export const LayoutSidebarComponent = ({ children }: Props): React.ReactElement => {
	const { profile, tags } = useSettings();
	//TODO: Handle sidebar override better

	return (
		<div className={style.container}>
			<div className={style.content}>{children}</div>
			<aside className={style.sidebar}>
				{profile && <CardAuthor {...profile} />}
				<TagList title="Topics" tags={tags} />
			</aside>
		</div>
	);
};

export const LayoutSidebar = memo(LayoutSidebarComponent);
