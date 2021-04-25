import React, { Fragment } from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";
import { ArticleList, ArticleListColumns } from "../../components/article-list";
import { ViewNaked } from "../../components/view";
import { Title } from "../../components/title";
import {
	getTopicPage,
	getTopicPagePaths,
	groqTopicArticleList,
	GroqTopicPage,
	GroqTopic_ArticleList,
} from "../../lib/groq/topic-page";
import { fetchArticleList, FetchProps } from "../../hooks/fetch-infinite-list";
import { LoadMore } from "../../components/button";

interface Props {
	preview: boolean;
	topic: GroqTopicPage;
	articles: GroqTopic_ArticleList;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = (params?.slug as string) || "";
	const { topic, articles } = await getTopicPage(slug);

	return {
		props: {
			preview,
			topic,
			articles,
		},
		revalidate: 1,
	};
};

export const CollectionPage = ({
	topic,
	articles,
	preview,
}: Props): React.ReactElement => {
	const router = useRouter();
	const slug = topic?.slug?.current;

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	if (!topic) {
		console.log({ topic });
		return <pre>{JSON.stringify({ topic }, null, 4)}</pre>;
	}

	const handleFetch = fetchArticleList({
		id: "topic-article-list",
		fetchDocs: (q: FetchProps) =>
			groqTopicArticleList({
				slug,
				from: q.from,
				to: q.to,
				client: q.client,
			}),
		initialData: articles,
	});

	return (
		<>
			<NextSeo
				title={
					preview ? `Preview ${topic.metadata.title}` : topic.metadata.title
				}
				description={topic.metadata.description}
				openGraph={{
					type: topic.metadata.type,
					title: topic.metadata.headline,
					description: topic.metadata.description,
					url: resolveUrl({
						slug,
						type: topic._type,
						isAbsolute: true,
					}),

					article: {
						publishedTime: new Date(
							topic.metadata.publishAt || topic._createdAt,
						).toISOString(),
						modifiedTime: new Date(topic._updatedAt).toISOString(),
						section: "",
						tags: topic.metadata.tags,
					},
					images: topic.metadata.thumbnails?.map((img) => {
						const imgUrl = urlFor(img)
							.auto("format")
							.width(400)
							.height(400)
							.quality(70)
							.url();

						return {
							url: imgUrl || "",
							width: 400,
							height: 400,
						};
					}),
				}}
				noindex={topic.metadata.noindex || false}
				nofollow={topic.metadata.nofollow || false}
			/>

			<ViewNaked>
				<Title title={topic.title} subtitle="Topic" />
				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Fragment key={"articles" + page}>
							<ArticleList
								articles={data}
								columns={ArticleListColumns.Three}
							/>
						</Fragment>
					);
				})}

				<LoadMore
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
				/>
			</ViewNaked>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allArticles = await getTopicPagePaths();
	return {
		paths:
			allArticles.map((slug) => ({
				params: {
					slug,
				},
			})) || [],
		fallback: true,
	};
};

export default CollectionPage;
