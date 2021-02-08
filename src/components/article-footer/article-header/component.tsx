import { SanityImage, SanityReference } from "sanity-codegen";
import { Article, Collection } from "../../../lib/schema";
import style from "./styles.module.scss";

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
