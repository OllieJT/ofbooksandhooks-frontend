import { CardType } from "../../models";
import { CardCollection, CardCollectionProps } from "../card-collection";
import { CardArticle, CardArticleProps } from "../card-article";

export type AnyCard = CardCollectionProps | CardArticleProps;

export const Card = (props: AnyCard) => {
	switch (props.type) {
		case CardType.Article:
			return <CardArticle {...props} />;
		case CardType.Collection:
			return <CardCollection {...props} />;
	}
};
