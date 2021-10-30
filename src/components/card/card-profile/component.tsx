import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ThemeClass } from "@lib/utility/handle-theme-color";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import { TagList, TagProps } from "@components/common/tag";

export interface CardProfileProps {
	name: string;
	subtitle?: string;
	tags?: string[];
	avatar?: FixedImage;
	link?: string;
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

export const CardProfile = ({ name, subtitle, tags = [], avatar, link }: CardProfileProps) => {
	const cardTags = tags.map((tag) => ({
		label: tag,
	}));
	return (
		<Wrapper url={link}>
			<header className={style.header}>
				<h5 className={style.title}>{name}</h5>
				{subtitle && <p className={style.subtitle}>{subtitle}</p>}
			</header>
			{avatar && (
				<div className={style.avatar}>
					<Image src={avatar.url} width={avatar.width} height={avatar.height} alt={avatar.alt || name} />
				</div>
			)}
			<div className={style.tags}>
				<TagList tags={cardTags} />
			</div>
		</Wrapper>
	);
};
