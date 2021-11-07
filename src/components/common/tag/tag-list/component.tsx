import style from "./styles.module.scss";
import { Tag, TagProps } from "../tag-item";

export interface TagListProps {
	title?: string;
	tags: TagProps[];
}

export const TagList = ({ title, tags }: TagListProps) => {
	return (
		<section className={style.container}>
			{title && (
				<header className={style.header}>
					<h4 className={style.title}>{title}</h4>
				</header>
			)}

			<ul className={style.list}>
				{tags.map((tag) => (
					<li className={style.item} key={tag.href + tag.label}>
						<Tag {...tag} />
					</li>
				))}
			</ul>
		</section>
	);
};
