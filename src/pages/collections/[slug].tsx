import React from "react";
import ErrorPage from "next/error";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanity";
import { NextSeo } from "next-seo";
import { resolveUrl } from "@lib/utility/resolve-url";
import {
	getCollectionPagePaths,
	GroqCollectionPage,
	getCollectionPage,
} from "@lib/groq/collection-page";
import { HeaderPage } from "@components/header/header-page";
import { LayoutSimple } from "@components/layout/layout-simple";
import { Feed, FeedColumns } from "@components/common/feed";

interface Props {
	preview: boolean;
	data: GroqCollectionPage;
}

export const CollectionPage = ({ data, preview }: Props): React.ReactElement => {
	const router = useRouter();
	const slug = data?.slug;
	let subtitle = "Collection";

	if (data?.tags && data.tags.length >= 1) {
		console.count("WE HAVE TAGS");
		subtitle = data.tags.map((tag) => tag.label).join(", ");
		console.count(subtitle);
	}

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
						slug: data.slug,
						type: data._type,
						isAbsolute: true,
					}),

					article: {
						publishedTime: new Date(
							data.metadata.publishAt || data._createdAt,
						).toISOString(),
						modifiedTime: new Date(data._updatedAt).toISOString(),
						section: "",
						tags: data.tags?.map((x) => x.label),
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
			/>

			<LayoutSimple>
				<HeaderPage title={data.title} subtitle={subtitle} theme={data.theme} />
				<Feed items={data.articles} columns={FeedColumns.Three} />
			</LayoutSimple>
		</>
	);
};

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

export const getStaticPaths: GetStaticPaths = async () => {
	const allCollections = await getCollectionPagePaths();
	return {
		paths:
			allCollections.map((slug) => ({
				params: {
					slug,
				},
			})) || [],
		fallback: true,
	};
};

export default CollectionPage;
