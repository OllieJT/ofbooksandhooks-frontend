import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Theme } from "../../utility/handle-theme-color";
import { CustomImage } from "../../utility/handle-sanity-image";
import { Tag } from "../tag";

export interface ProfileProps {
	name: string;
	subtitle?: string;
	tags?: string[];
	avatar?: CustomImage;
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

export const Profile = ({ name, subtitle, tags = [], avatar, link }: ProfileProps) => {
	return (
		<Wrapper url={link}>
			<header className={style.header}>
				<h5 className={style.title}>{name}</h5>
				{subtitle && <p className={style.subtitle}>{subtitle}</p>}
			</header>
			{avatar && (
				<div className={style.avatar}>
					<Image
						src={avatar.url}
						width={avatar.width}
						height={avatar.height}
						alt={avatar.alt || name}
					/>
				</div>
			)}
			<div className={style.tags}>
				{tags.map((tag) => (
					<Tag label={tag} theme={Theme.Yellow} />
				))}
			</div>
		</Wrapper>
	);
};
