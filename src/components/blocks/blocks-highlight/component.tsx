import { Gallery } from "../../../lib/schema";
import { PortableTextType } from "../utility/types";
import style from "./styles.module.scss";

export const BlockGallery = ({ node }: PortableTextType<Gallery>) => {
	return (
		<p>
			<pre>{JSON.stringify(node, null, 4)}</pre>
		</p>
	);
};
