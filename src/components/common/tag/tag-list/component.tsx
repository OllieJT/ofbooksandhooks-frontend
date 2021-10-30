import { Theme } from "@lib/utility/handle-theme-color";
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
				{tags.map(({ label, linkTo, isExternal, theme }) => (
					<li className={style.item} key={label}>
						<Tag
							label={label}
							linkTo={linkTo}
							theme={theme || Theme.Default}
							isExternal={isExternal}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};
