import { TagList, TagProps } from "@components/common/tag";
import { handleDate } from "@lib/utility";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	title: string;
	author: {
		name: string;
		href?: string;
	};
	date: Date;
	tags?: TagProps[];
	children: React.ReactNode;
	image?: FixedImage;
}

export const ArticlePageLayout = ({ children, image, date, author, tags, title }: Props) => {
	console.log(author);

	const dateTag: TagProps = {
		label: handleDate(date),
		value: date.toISOString(),
	};

	//@ts-ignore
	const allTags: TagProps[] = [...tags, dateTag].filter((x) => !!x);

	return (
		<div className={style.wrapper}>
			<article className={style.container}>
				{image && (
					<div className={style.banner}>
						<Image
							className={style.image}
							src={image.url}
							width={image.width}
							height={image.height}
							alt={image.alt}
							loading="eager"
						/>
					</div>
				)}
				<div className={`${style.content} ${!!image ? style.offset : style.spaced}`}>
					<header className={style.header}>
						<h1 className={style.title}>{title}</h1>
						<h6 className={style.author}>
							{author.href ? (
								<a href={author.href}>By {author.name}</a>
							) : (
								<span>By {author.name}</span>
							)}
						</h6>
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
