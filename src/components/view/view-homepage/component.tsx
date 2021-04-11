import { Card, CardSize } from "../../card";
import { AnyCard, CardArticleProps } from "../../card";
import style from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
	featured: CardArticleProps;
	cards: AnyCard[];
}

export const ViewHomepage = ({ featured, cards }: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<div className={style.feature}>
				<Card {...featured} size={CardSize.Large} />
			</div>

			<div className={style.bio}>{/* <AuthorBio  /> */}</div>
			{cards[0] && (
				<div className={style.small_1}>
					<Card {...cards[0]} size={CardSize.Small} />
				</div>
			)}
			{cards[1] && (
				<div className={style.small_2}>
					<Card {...cards[1]} size={CardSize.Small} />
				</div>
			)}
			{cards[2] && (
				<div className={style.tall_1}>
					<Card {...cards[2]} size={CardSize.Tall} />
				</div>
			)}
			{cards[3] && (
				<div className={style.small_3}>
					<Card {...cards[3]} size={CardSize.Small} />
				</div>
			)}
			{cards[4] && (
				<div className={style.small_4}>
					<Card {...cards[4]} size={CardSize.Small} />
				</div>
			)}
			{cards[5] && (
				<div className={style.small_5}>
					<Card {...cards[5]} size={CardSize.Small} />
				</div>
			)}

			<div className={style.sidebar}>instagram</div>
		</div>
	);
};
