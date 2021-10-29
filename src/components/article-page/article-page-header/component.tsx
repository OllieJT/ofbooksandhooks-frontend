import style from "./styles.module.scss";
import { TagList, TagProps } from "../../tag";
import { Theme } from "@lib/utility/handle-theme-color";
import { handleDate } from "@lib/utility";

export interface ArticleHeaderProps {
	title: string;

	authorName?: string;
	authorLink?: string;

	date: Date;

	tags?: TagProps[];
}

export const ArticleHeader = ({
	title,
	authorName,
	authorLink,
	date,
	tags: additionalTags,
}: ArticleHeaderProps) => {
	const authorTag: TagProps | undefined = !!authorName
		? {
				label: "Guest Post",
				linkTo: authorLink,
				isExternal: false,
				theme: Theme.Blue,
		  }
		: undefined;
	const dateTag: TagProps | undefined = !!authorName
		? {
				label: handleDate(date),
				theme: Theme.None,
		  }
		: undefined;

	//@ts-ignore
	const allTags: TagProps[] = [authorTag, ...additionalTags, dateTag].filter((x) => !!x);

	return (
		<header className={style.container}>
			<h1 className={style.title}>{title}</h1>
			<h6 className={style.author}>
				{authorLink ? (
					<a href={authorLink}>By {authorName}</a>
				) : (
					<span>By {authorName}</span>
				)}
			</h6>
			<div className={style.metadata}>
				<TagList tags={allTags} />
			</div>
		</header>
	);
};
