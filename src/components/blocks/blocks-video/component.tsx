import { Video } from "../../../lib/schema";
import style from "./styles.module.scss";

export const BlockVideo = (props: Video) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
