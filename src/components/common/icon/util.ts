import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import type { IconType } from "react-icons";

export interface IconPickerProps {
	name: string;
	provider: "fa" | "hi";
}
//@ts-ignore
export const getFaIcon = (name: string): IconType => FaIcons[name];

//@ts-ignore
export const getHiIcon = (name: string): IconType => HiIcons[name];

export const handleIconPicker = ({ name, provider }: IconPickerProps): IconType => {
	switch (provider) {
		case "fa":
			return getFaIcon(name);
		case "hi":
			//@ts-ignore
			return getHiIcon(name);
	}
};
