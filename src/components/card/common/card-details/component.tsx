import style from "./styles.module.scss";
import { CardTags } from "../card-tags";

export interface CardArticleProps {
	title: string;
	metadata?: string[];
	tags?: string[];
	size?: "small" | "regular";
}

export const CardDetails = ({ metadata, title, tags, size = "regular" }: CardArticleProps) => {
	const classNames = [style.container, style[size]].join(" ");

	return (
		<article className={classNames}>
			<header>
				<h4 className={style.title}>{title}</h4>
				{metadata && (
					<p className={style.metadata}>
						{metadata.map((label) => (
							<span key={label}>{label}</span>
						))}
					</p>
				)}
			</header>

			{tags && <CardTags tags={tags} />}
		</article>
	);
};
