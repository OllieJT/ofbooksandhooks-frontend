import { handleCurrency, slugify } from "@lib/utility";
import style from "./styles.module.scss";
import { handleSanityImageFixed } from "@lib/utility/handle-sanity-image";
import { CardProduct } from "../../card/card-product";
import { handleThemeColor } from "@lib/utility/handle-theme-color";
import type { Product } from "@lib/groq";

export type Props = {
	title: string;
	products?: Product[];
};

export const BlockProducts = ({ title, products = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{products.map(
				({
					title,
					cost,
					thumbnail,
					url,
					brand,
					// description,
					// expiresAt,
					notice,
				}) => {
					const thumb = handleSanityImageFixed({
						asset: thumbnail,
						width: 160,
						height: 160,
					});
					if (!thumb) {
						return null;
					}

					const noticeTheme = handleThemeClass(notice?.theme);
					const price = handleCurrency(cost);
					return (
						<li key={title + brand} className={style.item}>
							<CardProduct title={title} subtitle={brand} noteText={notice?.label} noteTheme={noticeTheme} price={price} thumb={thumb} link={url} />
						</li>
					);
				},
			)}
		</ul>
	);
};
