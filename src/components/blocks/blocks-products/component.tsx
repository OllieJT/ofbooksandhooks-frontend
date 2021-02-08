import { Products } from "../../../lib/schema";
import { PortableTextType } from "../utility/types";
import style from "./styles.module.scss";

export const BlockProducts = ({ node }: PortableTextType<Products>) => {
	return (
		<p>
			<pre>{JSON.stringify(node, null, 4)}</pre>
		</p>
	);
};
