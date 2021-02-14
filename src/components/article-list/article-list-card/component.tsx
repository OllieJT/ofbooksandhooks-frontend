import style from "./article-list.module.scss";

export interface ArticleListCardProps {
	link: string;
	title: string;
	date: string;
	image?: string;
	tags: string[];
}

export const ArticleListCard = ({
	title,
	link,
	date,
	image = "",
	tags,
}: ArticleListCardProps) => {
	return (
		<a className={style.container} href={link}>
			{image && <img className={style.thumb} src={image} />}
			<div className={style.content}>
				<ul className={style.tags}>
					{tags.map((tag) => (
						<li key={tag} className={style.tag}>
							<p className={style.label}>{tag}</p>
						</li>
					))}
				</ul>
				<h5 className={style.title}>{title}</h5>
				<p className={`${style.label} ${style.date}`}>{date}</p>
			</div>
		</a>
	);
};
