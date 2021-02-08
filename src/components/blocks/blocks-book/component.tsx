import { Book } from "../../../lib/schema";
import style from "./styles.module.scss";

export const BlockBook = (props: Book) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
