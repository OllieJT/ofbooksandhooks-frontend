import { Tag, TagProps } from "../../tag";
import { Author } from "../../../lib/schema";
import { Theme } from "../../../utility/handle-theme-color";
import { handleDate } from "../../../utility";
import style from "./styles.module.scss";

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
		<aside className={style.container}>
			{!!author && (
				<Tag
					label="Guest Post"
					//link={author.platforms?.[0].link.url}
					theme={Theme.Green}
					//isExternal
				/>
			)}

			{topics.map(({ label, link, isExternal, theme }) => (
				<Tag
					key={label}
					label={label}
					link={link}
					isExternal={isExternal}
					theme={theme || Theme.Default}
				/>
			))}

			<Tag label={handleDate(date)} theme={Theme.None} />
		</aside>
	);
};
