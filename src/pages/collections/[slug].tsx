import React from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";
import {
	getCollectionPagePaths,
	GroqCollectionPage,
	getCollectionPage,
} from "../../lib/groq/collection-page";
import { ArticleList, ArticleListColumns } from "../../components/article-list";
import { ViewNaked } from "../../components/view";
import { Title } from "../../components/title";

interface Props {
	preview: boolean;
	data: GroqCollectionPage;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = (params?.slug as string) || "";
	const data = await getCollectionPage(slug);

	return {
		props: {
			preview,
			data,
		},
		revalidate: 1,
	};
};

export const CollectionPage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	const slug = data?.slug.current;

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	if (!data) {
		console.log({ data });
		return <pre>{JSON.stringify({ data }, null, 4)}</pre>;
	}

	return (
		<>
			<NextSeo
				title={preview ? `Preview ${data.metadata.title}` : data.metadata.title}
				description={data.metadata.description}
				openGraph={{
					type: data.metadata.type,
					title: data.metadata.headline,
					description: data.metadata.description,
					url: resolveUrl({
						slug: data.slug.current,
						type: data._type,
						isAbsolute: true,
					}),

					article: {
						publishedTime: new Date(
							data.metadata.publishAt || data._createdAt,
						).toISOString(),
						modifiedTime: new Date(data._updatedAt).toISOString(),
						section: "",
						tags: data.metadata.tags,
					},
					images: data.metadata.thumbnails?.map((img) => {
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
				noindex={data.metadata.noindex || false}
				nofollow={data.metadata.nofollow || false}
			/>

			<ViewNaked>
				<Title title={data.title} subtitle="Collection" theme={data.theme} />

				<ArticleList
					articles={data.articles}
					columns={ArticleListColumns.Three}
				/>
			</ViewNaked>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allArticles = await getCollectionPagePaths();
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
