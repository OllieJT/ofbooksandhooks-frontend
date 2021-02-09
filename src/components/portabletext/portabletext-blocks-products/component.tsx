import { Cost, Product, Products } from "../../../lib/schema";
import { slugify } from "../../../utility";
import Image from "next/image";
import style from "./styles.module.scss";
import { handleSanityImage } from "../../../utility/handle-sanity-image";

export type Props = {
	title: string;
	products?: Product[];
};

const useCurrency = (c: Cost) => {
	switch (c.currency) {
		case "EUR":
			return `€${c.amount}`;
		case "GBP":
			return `£${c.amount}`;
		case "EUR":
			return `$${c.amount}`;
	}
};

export const BlockProducts = ({ title, products = [] }: Props) => {
	return (
		<section className={style.container} id={slugify(title)}>
			<ul>
				{products.map(
					({
						title,
						cost,
						thumbnail,
						url,
						brand,
						description,
						expiresAt,
						notice,
					}) => {
						const thumb = handleSanityImage(thumbnail.asset, {
							width: 1280,
							height: 720,
							alt: thumbnail.alt,
						});

						if (!thumb) {
							return null;
						}
						return (
							<li key={title + brand}>
								{thumb && (
									<Image
										src={thumb.url}
										alt={thumb.alt || title}
										width={thumb.width}
										height={thumb.height}
									/>
								)}
								<header>
									<p>{title}</p>
									<p>{brand}</p>
								</header>
								<aside>
									<p>
										<strong>{useCurrency(cost)}</strong>
										{notice && <span>{notice?.label}</span>}
									</p>
								</aside>
							</li>
						);
					},
				)}
			</ul>
		</section>
	);
};
