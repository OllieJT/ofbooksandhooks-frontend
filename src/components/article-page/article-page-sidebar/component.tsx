import style from "./styles.module.scss";
import { TagList, TagProps } from "../../tag";
import { CardCollection, CardCollectionProps } from "../../card";
import { AuthorBio } from "../../author-bio";
import { useSettings } from "../../../hooks/use-settings";

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
	const { biography } = useSettings();
	return (
		<aside className={style.container}>
			{featureCollection && <CardCollection {...featureCollection} />}
			{collectionList && <TagList title="Collections" tags={collectionList} />}
			{topicList && <TagList title="Topics" tags={topicList} />}

			{biography.title && biography.description && (
				<AuthorBio
					title={biography.title}
					subtitle={biography.description}
					avatar={biography.photo}
					//cta={{label: "Learn More",url: '/about'}}
				/>
			)}
		</aside>
	);
};
