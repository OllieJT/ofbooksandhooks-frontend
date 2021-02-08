import VideoPlayer from "react-player";

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
		<VideoPlayer
			url={href}
			controls={hasControls}
			playing={isAutoplay}
			loop={isLoop}
			muted={isMuted}
		/>
	);
};
