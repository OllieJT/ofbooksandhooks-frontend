export interface ButtonProps<T> {
	onClick: () => void;
	isActive?: boolean;
	isLoading?: boolean;
	resting: T;
	active?: T;
}
