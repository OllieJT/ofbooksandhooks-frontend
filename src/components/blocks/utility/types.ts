export interface PortableTextType<T> {
	children: [];
	isInline?: undefined;
	node: T;
	options: {
		dataset: string;
		projectId: string;
		imageOptions: {};
	};
}

export interface PortableTextMark<M> {
	children: string[];
	mark: M;
	markKey: string;
	_key: string;
	_type: string;
}
