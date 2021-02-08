import { LinkInternal, LinkExternal } from "../../../lib/schema";
//import style from "./styles.module.scss";

interface PortableTextMark<M> {
	children: string[];
	mark: M;
	markKey: string;
	_key: string;
	_type: string;
}

export const MarkLinkInternal = (props: PortableTextMark<LinkInternal>) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
export const MarkLinkExternal = (props: PortableTextMark<LinkExternal>) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
