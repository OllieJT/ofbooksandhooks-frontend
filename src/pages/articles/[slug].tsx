import React from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
//import { Loading } from "../../components/loading";
import {
	getArticlePage,
	getArticlePagePaths,
	GroqArticlePage,
	groqArticlePageQuery,
} from "../../lib/groq/article-page";
import { ArticlePageContent, ArticlePageLayout } from "../../components/article-page";
import { urlFor, useCurrentUser, usePreviewSubscription } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";
import { TagProps } from "../../components/tag";
import { handleSanityImageFixed } from "../../utility/handle-sanity-image";

interface Props {
	preview: boolean;
	data?: GroqArticlePage;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = (params?.slug as string) || "";
	const data = await getArticlePage(slug, preview);

	return {
		props: {
			preview,
			data,
		},
		revalidate: 1,
	};
};

export const ArticlePage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	const slug = data?.slug.current;
	const currentUser = useCurrentUser();

	const { data: post, loading, error } = usePreviewSubscription(
		groqArticlePageQuery,
		{
			params: { slug },
			initialData: data,
			// note: not using next preview
			enabled: false && Boolean(slug && !!currentUser.data),
		},
	);

	//const post = data;

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	if (!post) {
		console.log({ post });
		return <pre>{JSON.stringify({ post }, null, 4)}</pre>;
	}

	if (loading) {
		return <div>Loading</div>;
	}

	if (error) {
		throw new Error(error.message);
	}

	//todo: use content blocks to populate <NextSeo/>

	const headerImage =
		post.thumbnail?.asset &&
		handleSanityImageFixed({ asset: post.thumbnail, width: 1920, height: 720 });

	const topicTags: TagProps[] =
		post.topics?.map(({ title, slug, _type }) => ({
			label: title,
			linkTo: resolveUrl({
				slug: slug?.current,
				type: _type,
			}),
		})) || [];

	return (
		<>
			<NextSeo
				title={preview ? `Preview ${post.metadata.title}` : post.metadata.title}
				description={post.metadata.description}
				openGraph={{
					type: post.metadata.type,
					title: post.metadata.headline,
					description: post.metadata.description,
					url: resolveUrl({
						slug: post.slug.current,
						type: post._type,
						isAbsolute: true,
					}),

					article: {
						publishedTime: new Date(
							post.metadata.publishAt || post._createdAt,
						).toISOString(),
						modifiedTime: new Date(post._updatedAt).toISOString(),
						section: "",
						tags: post.metadata.tags,
					},
					images: post.metadata.thumbnails?.map((img) => {
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
				noindex={post.metadata.noindex || false}
				nofollow={post.metadata.nofollow || false}
			/>

			<ArticlePageLayout
				title={post.title}
				image={headerImage}
				date={new Date(post.metadata.publishAt || post._createdAt)}
				authorLink={resolveUrl({
					slug: post.author.slug.current,
					type: post.author._type,
				})}
				authorName={post.author.name}
				tags={topicTags}
			>
				<ArticlePageContent content={post.content} />
				{/* <ArticleFooter recommendations={recommended} /> */}
			</ArticlePageLayout>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allArticles = await getArticlePagePaths();
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

export default ArticlePage;
