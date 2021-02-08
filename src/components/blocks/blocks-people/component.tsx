import { People } from "../../../lib/schema";
import { PortableTextType } from "../utility/types";
import style from "./styles.module.scss";

export const BlockPeople = ({ node }: PortableTextType<People>) => {
	return (
		<p>
			<pre>{JSON.stringify(node, null, 4)}</pre>
		</p>
	);
};
