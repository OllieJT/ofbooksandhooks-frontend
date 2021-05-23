import { TagList } from "../../../../tag";
import style from "./styles.module.scss";

interface Props {
	title: string;
	subtitle?: string;

	date?: string;
	className?: string;

	tags?: string[];
}

export const CollectionCardTitle = ({
	className,
	date,
	title,
	subtitle,
	tags,
}: Props) => {
	return (
		<div className={`${style.container} ${className}`}>
			{tags && <TagList tags={tags.map((t) => ({ label: t }))} />}
			{tags && (
				<ul className={style.tags}>
					{tags.map((tag) => (
						<li key={tag} className={style.tag}>
							<p className={style.label}>{tag}</p>
						</li>
					))}
				</ul>
			)}

			<h4 className={style.title}>{title}</h4>
			{subtitle && <p className={style.subtitle}>{subtitle}</p>}
			{date && <p className={`${style.label} ${style.date}`}>{date}</p>}
		</div>
	);
};
