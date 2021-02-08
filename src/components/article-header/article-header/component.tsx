import { SanityAsset } from "sanity-codegen";
import style from "./styles.module.scss";

interface ArticleHeaderTagProps {
	label: string;
	link: string;
	theme: "green" | "blue" | "yellow";
}

interface Props {
	title: string;
	topics: ArticleHeaderTagProps[];
	date: Date;
	image?: SanityAsset;
}

export const ArticleHeader = ({ title, date, image, topics }: Props) => {
	return <div>{title}</div>;
};
