import React from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
//import { Loading } from "../../components/loading";
import { getArticlePage, getArticlePagePaths } from "../../lib/groq/groq-article-page";
import { ArticlePageContent, ArticlePageLayout } from "../../components/article-page";
import { urlFor, useCurrentUser, usePreviewSubscription } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";
import { TagProps } from "../../components/tag";
import { handleSanityImageFixed } from "../../utility/handle-sanity-image";
import { groqArticle, GroqArticle } from "../../lib/db/groq-article-page";

interface Props {
	preview: boolean;
	data?: GroqArticle;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = params?.slug?.toString();
	const post = slug && (await getArticlePage(slug, preview));

	return {
		props: {
			preview,
			data: post,
		},
		revalidate: 1,
	};
};

export const ArticlePage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	const slug = data?.slug;
	const currentUser = useCurrentUser();

	const { data: post } = usePreviewSubscription(groqArticle, {
		params: { slug },
		initialData: data,
		// note: not using next preview
		enabled: Boolean(slug && !!currentUser.data),
	});
	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	if (!post) {
		console.log({ post });
		return <pre>{JSON.stringify({ post }, null, 4)}</pre>;
	}

	const {
		metadata,
		content,
		_updatedAt,
		_createdAt,
		title,
		author,
		//recommended,
		topics,
		thumbnail,
	} = post;

	//todo: use content blocks to populate <NextSeo/>

	const headerImage =
		thumbnail?.asset &&
		handleSanityImageFixed({ asset: thumbnail, width: 1920, height: 720 });

	const topicTags: TagProps[] =
		topics?.map((topic) => ({
			label: topic.title,
			linkTo: resolveUrl({
				slug: topic.slug,
				type: topic._type,
			}),
		})) || [];

	return (
		<>
			<NextSeo
				title={preview ? `Preview ${metadata?.title}` : metadata?.title}
				description={metadata?.description}
				openGraph={{
					type: metadata?.type,
					title: metadata?.headline,
					description: metadata?.description,
					url: resolveUrl({
						slug: post.slug,
						type: post._type,
						isAbsolute: true,
					}),

					article: {
						publishedTime: new Date(
							metadata.publishAt || _createdAt,
						).toISOString(),
						modifiedTime: new Date(_updatedAt).toISOString(),
						section: "",
						tags: metadata?.tags,
					},
					images: metadata?.thumbnails?.map((img) => {
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
				noindex={metadata?.noindex || false}
				nofollow={metadata?.nofollow || false}
			/>
			<ArticlePageLayout
				title={title}
				image={headerImage}
				date={new Date(metadata.publishAt || _createdAt)}
				authorLink={resolveUrl({
					slug: author.slug,
					type: author._type,
				})}
				authorName={author.name}
				tags={topicTags}
			>
				<ArticlePageContent content={content} />
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
