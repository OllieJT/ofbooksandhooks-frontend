import VideoPlayer from "react-player";
import style from "./styles.module.scss";

export type Props = {
	href: string;
	isAutoplay?: boolean;
	isLoop?: boolean;
	isMuted?: boolean;
	hasControls?: boolean;
};

export const BlockVideo = ({
	href,
	hasControls = true,
	isAutoplay = false,
	isLoop = true,
	isMuted = false,
}: Props) => {
	return (
		<div className={style.container}>
			<VideoPlayer
				url={href}
				controls={hasControls}
				playing={isAutoplay}
				loop={isLoop}
				muted={isMuted}
				width={756}
				height={425}
			/>
		</div>
	);
};
