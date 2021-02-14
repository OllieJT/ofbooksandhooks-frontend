import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { ArticleList } from "../../components/article-list";
import { useLoadMore } from "../../hooks/use-load-more";
import { getArticleList, ArticleListQuery } from "../../lib/groq/groq-article-list";

interface Props {
	preview: boolean;
	//data: { articles: ArticleListQuery[] };
}

export const AllPostsPage = ({}: Props): React.ReactElement => {
	const handleFetch = (pageNum: number) => getArticleList(pageNum);
	const { entries, isLoading, nextPage } = useLoadMore<ArticleListQuery>(handleFetch);

	return (
		<>
			<NextSeo title="Articles" />

			<ArticleList
				articles={entries}
				isLoading={isLoading}
				onLoadMore={nextPage}
			/>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	//const articles = await getArticleList(1, preview);

	return {
		props: {
			//data: { articles },
			preview,
		},
		revalidate: 1,
	};
};

export default AllPostsPage;
