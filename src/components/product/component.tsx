import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Theme, handleThemeClass } from "@lib/utility/handle-theme-color";
import type { FixedImage } from "@lib/utility/handle-sanity-image";

export interface ProductCardProps {
	title: string;
	subtitle?: string;
	link?: string;
	price?: string;
	noteText?: string;
	noteTheme: Theme;
	thumb?: FixedImage;
}

interface Wrapper {
	url?: string;
	children: React.ReactNode;
}

const Wrapper = ({ children, url }: Wrapper) => {
	if (!!url) {
		return (
			<Link href={url} passHref>
				<a className={style.container} target="_blank">
					{children}
				</a>
			</Link>
		);
	}
	return <div className={style.container}>{children}</div>;
};

export const ProductCard = ({
	title,
	subtitle,
	price,
	noteText,
	noteTheme = Theme.Blue,
	thumb,
	link,
}: ProductCardProps) => {
	const themeClass = handleThemeClass(noteTheme);
	return (
		<Wrapper url={link}>
			<header className={style.header}>
				<h5 className={style.title}>{title}</h5>
				{subtitle && <p className={style.subtitle}>{subtitle}</p>}
			</header>
			{thumb && (
				<div className={style.thumb}>
					<Image
						src={thumb.url}
						width={thumb.width}
						height={thumb.height}
						alt={thumb.alt || title}
					/>
				</div>
			)}
			{price && (
				<p className={`${style.price} ${themeClass}`}>
					<strong>{price}</strong>
					<span>{noteText}</span>
				</p>
			)}
		</Wrapper>
	);
};
