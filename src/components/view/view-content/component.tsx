import { FixedImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	image?: FixedImage;
	children: React.ReactNode;
}

export const ViewContent = ({ image, children }: Props): React.ReactElement => {
	return (
		<article className={style.container}>
			{image && (
				<div className={style.banner}>
					<Image
						className={style.image}
						src={image.url}
						width={image.width}
						height={image.height}
						alt={image.alt}
						loading="eager"
					/>
				</div>
			)}
			<div
				className={`${style.content} ${!!image ? style.offset : style.spaced}`}
			>
				{children}
			</div>
		</article>
	);
};
