import { useQuery } from "react-query";
import { groqCollectionList } from "@lib/groq/collection-list";
import { groqTopicList } from "@lib/groq/topic-list";
import { getClient } from "@lib/sanity";
import { TaxonomyContext } from "./context";

interface Props {
	children: React.ReactNode;
}

const getTaxonomies = async (preview: boolean) => {
	const client = getClient(preview);

	const [collections, topics] = await Promise.all([
		groqCollectionList({ client, from: 0, to: 32 }),
		groqTopicList({ client, from: 0, to: 32 }),
	]);

	return { collections, topics };
};

export const TaxonomyProvider = ({ children }: Props) => {
	const { error, data } = useQuery("taxonomy", async () => await getTaxonomies(false), {
		staleTime: 900000,
	});

	if (error) {
		console.warn({ fetch: "taxonomy", error });
	}

	return (
		<TaxonomyContext.Provider
			value={{
				collections: data?.collections || [],
				topics: data?.topics || [],
			}}>
			{children}
		</TaxonomyContext.Provider>
	);
};
