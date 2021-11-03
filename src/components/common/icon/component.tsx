import { handleIconPicker, IconPickerProps } from "./util";

export const Icon = (props: IconPickerProps) => {
	const IconElement = handleIconPicker(props);
	return <IconElement />;
};
