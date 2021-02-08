import { Book } from "../../../lib/schema";
import { PortableTextType } from "../utility/types";
import style from "./styles.module.scss";

export const BlockBook = ({ node }: PortableTextType<Book>) => {
	return (
		<p>
			<pre>{JSON.stringify(node, null, 4)}</pre>
		</p>
	);
};
