import React from "react";
import ErrorPage from "next/error";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "@lib/utility/resolve-url";
import { getTopicPage, getTopicPagePaths, groqTopicArticleList, GroqTopicPage, GroqTopic_ArticleList } from "@lib/groq/topic-page";
import { fetchArticleList, FetchProps } from "../../hooks/fetch-infinite-list";
import { ButtonText } from "@components/button/button-text";
import { LayoutSimple } from "@components/layout/layout-simple";
import { PageHeader } from "@components/common/page-header";
import { Feed, FeedColumns } from "@components/common/feed";
import { handleFeedArticles } from "@lib/utility/handle-feed-articles";

interface Props {
	preview: boolean;
	topic: GroqTopicPage;
	articles: GroqTopic_ArticleList;
	slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = (params?.slug as string) || "";
	const { topic, articles } = await getTopicPage(slug);

	return {
		props: {
			preview,
			topic,
			articles,
			slug,
		},
		revalidate: 1,
	};
};

export const CollectionPage = ({ topic, articles, preview, slug }: Props): React.ReactElement => {
	const router = useRouter();

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	if (!topic) {
		console.log({ topic });
		return <pre>{JSON.stringify({ topic }, null, 4)}</pre>;
	}

	const handleFetch = fetchArticleList({
		id: `topic-article-list-${slug}`,
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
				title={preview ? `Preview ${topic.metadata.title}` : topic.metadata.title}
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
						publishedTime: new Date(topic.metadata.publishAt || topic._createdAt).toISOString(),
						modifiedTime: new Date(topic._updatedAt).toISOString(),
						section: "",
						tags: topic.metadata.tags,
					},
					images: topic.metadata.thumbnails?.map((img) => {
						const imgUrl = urlFor(img).auto("format").width(400).height(400).quality(70).url();

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

			<LayoutSimple>
				<PageHeader title={topic.title} subtitle="Topic" />
				{handleFetch.data?.pages.map(({ data, page }) => {
					return <Feed key={"articles" + page} items={handleFeedArticles(data)} columns={FeedColumns.Three} />;
				})}

				<ButtonText
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
					resting={{
						label: "Load More",
					}}
				/>
			</LayoutSimple>
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
