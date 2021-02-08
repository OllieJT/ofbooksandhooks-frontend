interface Props {
	message?: string;
}

export const Loading = ({ message = "Loading..." }: Props) => {
	return (
		<div>
			<h1>{message}</h1>
		</div>
	);
};
