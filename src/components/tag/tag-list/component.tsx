import { Theme } from "../../../utility/handle-theme-color";
import style from "./styles.module.scss";
import { Tag, TagProps } from "../tag-item";

export interface TagListProps {
	tags: TagProps[];
}

export const TagList = ({ tags }: TagListProps) => {
	return (
		<ul className={style.list}>
			{tags.map(({ label, link, isExternal, theme }) => (
				<li className={style.item} key={label}>
					<Tag
						label={label}
						link={link}
						theme={theme || Theme.Default}
						isExternal={isExternal}
					/>
				</li>
			))}
		</ul>
	);
};
