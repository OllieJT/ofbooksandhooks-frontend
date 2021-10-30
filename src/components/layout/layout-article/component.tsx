import { TagList, TagProps } from "@components/common/tag";
import { handleDate } from "@lib/utility";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import { ThemeClass } from "@lib/utility/handle-theme-color";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	title: string;
	authorName?: string;
	authorLink?: string;
	date: Date;
	tags?: TagProps[];
	children: React.ReactNode;
	image?: FixedImage;
}

export const ArticlePageLayout = ({ children, image, date, authorLink, tags, title, authorName }: Props) => {
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
	const allTags: TagProps[] = [authorTag, ...tags, dateTag].filter((x) => !!x);

	return (
		<div className={style.wrapper}>
			<article className={style.container}>
				{image && (
					<div className={style.banner}>
						<Image className={style.image} src={image.url} width={image.width} height={image.height} alt={image.alt} loading="eager" />
					</div>
				)}
				<div className={`${style.content} ${!!image ? style.offset : style.spaced}`}>
					<header className={style.header}>
						<h1 className={style.title}>{title}</h1>
						<h6 className={style.author}>{authorLink ? <a href={authorLink}>By {authorName}</a> : <span>By {authorName}</span>}</h6>
						<div className={style.metadata}>
							<TagList tags={allTags} />
						</div>
					</header>
					{children}
				</div>
			</article>
		</div>
	);
};
