import style from "./styles.module.scss";
import { TagList, TagProps } from "../../tag";
import { CardCollection, CardCollectionProps } from "../../card";

export interface ArticlePageSidebarProps {
	featureCollection?: CardCollectionProps;
	collectionList?: TagProps[];
	topicList?: TagProps[];
}

export const ArticlePageSidebar = ({
	featureCollection,
	collectionList,
	topicList,
}: ArticlePageSidebarProps) => {
	return (
		<aside className={style.container}>
			{featureCollection && <CardCollection {...featureCollection} />}
			{collectionList && <TagList title="Collections" tags={collectionList} />}
			{topicList && <TagList title="Topics" tags={topicList} />}
		</aside>
	);
};
