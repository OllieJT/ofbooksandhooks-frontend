import React from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Loading } from "../../components/loading";
import {
	getArticlePage,
	getArticlePagePaths,
	articlePageQuery,
} from "../../lib/groq/groq-article-page";
import { Article } from "../../lib/schema";
import { ArticleLayout } from "../../components/article";
import { PortableText } from "../../components/portabletext";
import { urlFor, usePreviewSubscription } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";

interface Props {
	preview: boolean;
	data: { post?: Article };
}

export const ArticlePage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	if (!router.isFallback && !data.post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const { data: page } = usePreviewSubscription(articlePageQuery, {
		params: { slug: data?.post?.slug },
		initialData: data,
		enabled: preview,
	});

	if (!page?.post) {
		console.log(page);
		return <Loading message="Loading article..." />;
	}

	const { metadata, content, _updatedAt, _createdAt, publishAt } = page.post;

	//todo: alert user of preview mode -> const editor = useCurrentUser();
	//const currentUser = useCurrentUser()
	//todo: use content blocks to populate <NextSeo/>

	return (
		<ArticleLayout>
			<NextSeo
				title={preview ? `Preview ${metadata?.title}` : metadata?.title}
				description={metadata?.description}
				openGraph={{
					type: metadata?.type,
					title: metadata?.headline,
					description: metadata?.description,
					url: resolveUrl(page.post, true),

					article: {
						publishedTime: new Date(publishAt || _createdAt).toISOString(),
						modifiedTime: new Date(_updatedAt).toISOString(),
						section: "",
						tags: metadata?.tags,
					},
					images: metadata?.thumbnails?.map(({ asset }) => {
						const imgUrl = urlFor(asset)
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
			{/* todo: Header */}
			<PortableText blocks={content} />
			{/* todo: Recommended */}
		</ArticleLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = params?.slug?.toString();
	console.log({ slug, params });
	const post = slug && (await getArticlePage(slug, preview));
	const found = post && post?.slug?.current;

	if (!found) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			preview,
			data: { post },
		},
		revalidate: 1,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allArticles = await getArticlePagePaths();

	console.log({ allArticles });
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
