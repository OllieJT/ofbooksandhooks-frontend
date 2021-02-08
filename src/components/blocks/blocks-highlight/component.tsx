import { Gallery } from "../../../lib/schema";
import style from "./styles.module.scss";

export const BlockGallery = (props: Gallery) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
