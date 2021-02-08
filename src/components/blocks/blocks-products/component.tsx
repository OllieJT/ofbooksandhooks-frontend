import { Products } from "../../../lib/schema";
import style from "./styles.module.scss";

export const BlockProducts = (props: Products) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
