//import style from "./styles.module.scss";

import { Article, Collection } from "../../../lib/groq";

type Recommendation = Article | Collection;

interface Props {
	recommendations: [
		Recommendation,
		Recommendation,
		Recommendation,
		Recommendation,
		Recommendation,
	];
}

export const ArticleFooter = ({ recommendations }: Props) => {
	return <pre>{JSON.stringify(recommendations, null, 4)}</pre>;
};
