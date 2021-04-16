import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { ViewSidebar } from "../../components/view";
import { resolveUrl } from "../../utility/resolve-url";
import {
	groqCollectionList,
	GroqCollectionList,
} from "../../lib/groq/collection-list/groq";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { Fragment } from "react";
import { LoadMore } from "../../components/button";
import { getCollectionList } from "../../lib/groq/collection-list";
import Link from "next/link";

interface Props {
	preview: boolean;

	collections: GroqCollectionList;
}

export const AllCollectionsPage = ({ collections }: Props): React.ReactElement => {
	const handleFetch = fetchArticleList({
		id: "collections-list",
		fetchDocs: groqCollectionList,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<ViewSidebar>
				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Fragment key={"articles" + page}>
							{data.map((x) => (
								<Link
									href={resolveUrl({
										slug: x.slug.current,
										type: x._type,
									})}
								>
									{x.title}
								</Link>
							))}
						</Fragment>
					);
				})}

				<LoadMore
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
				/>
			</ViewSidebar>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const collections = await getCollectionList(1, preview);

	return {
		props: {
			preview,

			collections,
		},
		revalidate: 1,
	};
};

export default AllCollectionsPage;
