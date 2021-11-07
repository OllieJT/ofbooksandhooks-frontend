import style from "./styles.module.scss";
import Image from "next/image";
import type { Person } from "@lib/groq";
import { PortableText } from "@components/portabletext";
import { urlFor } from "@lib/sanity";

export const CardAuthor = (props: Person) => {
	const name = [props.nameFirst, props.nameLast].join(" ");
	const avatarUrl = props.avatar && urlFor(props.avatar).maxWidth(240).maxHeight(240).url();

	console.log({ avatar: props.avatar, avatarUrl });
	return (
		<article className={style.container}>
			{avatarUrl && (
				<Image
					className={style.avatar}
					src={avatarUrl}
					alt={props.avatar?.alt}
					width={120}
					height={120}
					objectFit="cover"
					layout="fixed"
				/>
			)}
			<h4 className={style.title}>{name}</h4>
			<h6 className={style.subtitle}>{props.alias}</h6>
			<PortableText blocks={props.bio} />
		</article>
	);
};
