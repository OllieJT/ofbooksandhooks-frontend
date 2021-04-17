import { CardType } from "../../models";
import { CardCollection, CardCollectionProps } from "../card-collection";
import { CardArticle, CardArticleProps } from "../card-article";
import { memo } from "react";

export type AnyCard = CardCollectionProps | CardArticleProps;

export const CardComponent = (props: AnyCard) => {
	switch (props.type) {
		case CardType.Article:
			return <CardArticle {...props} />;
		case CardType.Collection:
			return <CardCollection {...props} />;
	}
};

export const Card = memo(CardComponent);
