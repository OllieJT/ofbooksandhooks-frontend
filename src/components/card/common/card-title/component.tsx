import style from "./styles.module.scss";

export interface CardTitleProps {
	title: string;
	subtitle?: string;

	date?: string;
	className?: string;

	tags?: string[];
}

export const CardTitle = ({
	className,
	date,
	title,
	subtitle,
	tags,
}: CardTitleProps) => {
	return (
		<div className={`${style.container} ${className}`}>
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
