import { Video } from "../../../lib/schema";
import { PortableTextType } from "../utility/types";
import style from "./styles.module.scss";

export const BlockVideo = ({ node }: PortableTextType<Video>) => {
	return (
		<p>
			<pre>{JSON.stringify(node, null, 4)}</pre>
		</p>
	);
};
