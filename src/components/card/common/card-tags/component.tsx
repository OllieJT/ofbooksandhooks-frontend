import style from "./styles.module.scss";

export interface CardArticleProps {
	tags: string[];
}

export const CardTags = ({ tags }: CardArticleProps) => {
	return (
		<ul className={style.list}>
			{tags.map((tag) => (
				<li className={style.item} key={tag}>
					{tag}
				</li>
			))}
		</ul>
	);
};
