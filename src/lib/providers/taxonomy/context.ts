import { createContext, useContext } from "react";
import { GroqCollectionList } from "@lib/groq/collection-list";
import { GroqTopicList } from "@lib/groq/topic-list";

export interface TaxonomyContextProps {
	collections: GroqCollectionList;
	topics: GroqTopicList;
}

export const TaxonomyContext = createContext<TaxonomyContextProps>({
	collections: [],
	topics: [],
});

export const useTaxonomy = () => {
	return useContext(TaxonomyContext);
};
