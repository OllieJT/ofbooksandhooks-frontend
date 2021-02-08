import { Tag, TagProps } from "../../tag";
import { Author } from "../../../lib/schema";
import { Theme } from "../../../utility/handle-theme-color";

export interface ArticleHeaderMetadataProps {
	topics: TagProps[];
	date: Date;
	author?: Author;
}

export const ArticleHeaderMetadata = ({
	date,
	topics,
	author,
}: ArticleHeaderMetadataProps) => {
	return (
		<aside>
			{!!author && (
				<Tag
					label={author.knownAs}
					link={author.platforms?.[0].link.url}
					theme={Theme.Green}
					isExternal
				/>
			)}

			<Tag label={date.toTimeString()} />

			{topics.map((topicTag) => (
				<Tag key={topicTag.label} {...topicTag} />
			))}
		</aside>
	);
};
