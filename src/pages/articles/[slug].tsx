import React from "react";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
//import { Loading } from "../../components/loading";
import {
	getArticlePage,
	getArticlePagePaths,
	articlePageQuery,
	ArticleQuery,
} from "../../lib/groq/groq-article-page";
import { ArticleLayout } from "../../components/article-layout";
import { PortableText } from "../../components/portabletext";
import { urlFor, useCurrentUser, usePreviewSubscription } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "../../utility/resolve-url";
//import { ArticleFooter } from "../../components/article-footer";
import { ArticleHeader } from "../../components/article-header";
import { TagProps } from "../../components/tag";
import { handleSanityImage } from "../../utility/handle-sanity-image";

interface Props {
	preview: boolean;
	data?: ArticleQuery;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = params?.slug?.toString();
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
			data: post,
		},
		revalidate: 1,
	};
};

export const ArticlePage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	const slug = data?.slug?.current;
	console.log({ slugData: data });
	const currentUser = useCurrentUser();

	const { data: post } = usePreviewSubscription(articlePageQuery, {
		params: { slug },
		initialData: data,
		// note: not using next preview
		enabled: Boolean(slug && !!currentUser.data),
	});
	console.log({
		data,
		post,
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
		publishAt,
		title,
		author,
		//recommended,
		topics,
		image,
	} = post;

	//todo: use content blocks to populate <NextSeo/>

	const headerImage =
		image?.asset &&
		handleSanityImage(image.asset, {
			width: 1126,
			height: 563,
			alt: image?.alt,
		});

	const topicTags: TagProps[] =
		topics?.map((topic) => {
			return {
				label: topic.label,
				link: resolveUrl(topic),
			};
		}) || [];

	return (
		<ArticleLayout>
			<NextSeo
				title={preview ? `Preview ${metadata?.title}` : metadata?.title}
				description={metadata?.description}
				openGraph={{
					type: metadata?.type,
					title: metadata?.headline,
					description: metadata?.description,
					url: resolveUrl(post, true),

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
			<ArticleHeader
				title={title}
				metadata={{
					date: new Date(publishAt || _createdAt),
					author: author,
					topics: topicTags,
				}}
				image={headerImage}
			/>
			<PortableText blocks={content} />
			{/* <ArticleFooter recommendations={recommended} /> */}
		</ArticleLayout>
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
