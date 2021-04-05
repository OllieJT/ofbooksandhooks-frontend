import { CardType, CardSize } from "./attributes";
import { Theme } from "../../../utility/handle-theme-color";

export interface CardBase<Type = typeof CardType> {
	type: Type;
	size: CardSize;
	theme?: Theme;
}
