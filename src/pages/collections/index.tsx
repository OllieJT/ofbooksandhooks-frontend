import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { ViewNaked } from "@components/view";
import { groqCollectionList, GroqCollectionList } from "@lib/groq/collection-list/groq";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { Fragment } from "react";
import { Button } from "@components/button";
import { getCollectionList } from "@lib/groq/collection-list";
import { CollectionList } from "@components/collection";
import { CardListColumns } from "@components/card-list";
import { Title } from "@components/title";

interface Props {
	preview: boolean;

	collections: GroqCollectionList;
}

export const AllCollectionsPage = ({ collections }: Props): React.ReactElement => {
	const handleFetch = fetchArticleList({
		id: "collections-list",
		fetchDocs: groqCollectionList,
		initialData: collections,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<ViewNaked>
				<Title title="All Collections" />

				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Fragment key={"articles" + page}>
							<CollectionList
								collections={data}
								columns={CardListColumns.Three}
							/>
						</Fragment>
					);
				})}

				<Button
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
					label="Load More"
				/>
			</ViewNaked>
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
