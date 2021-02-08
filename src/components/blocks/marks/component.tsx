import { LinkInternal, LinkExternal } from "../../../lib/schema";
//import style from "./styles.module.scss";
import Link from "next/link";
import { resolveUrl } from "../../../utility/resolve-url";
import { PortableTextMark } from "../utility/types";

export const MarkLinkInternal = ({
	mark,
	children,
}: PortableTextMark<LinkInternal>) => {
	console.log(mark);
	return (
		<Link href={resolveUrl(mark.reference)} passHref>
			<a>{children}</a>
		</Link>
	);
};
export const MarkLinkExternal = ({
	mark,
	children,
}: PortableTextMark<LinkExternal>) => {
	return (
		<Link href={mark.url} passHref>
			<a target="_blank">{children}</a>
		</Link>
	);
};
