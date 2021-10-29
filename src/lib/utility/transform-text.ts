import { format } from "date-fns";
import type { Cost } from "../groq";

export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w\-]+/g, "") // Remove all non-word chars
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}

export const handleDate = (d: Date): string => {
	return format(d, "do MMM yyyy");
};

export const handleCurrency = (cost: Cost) => {
	switch (cost.currency) {
		case "EUR":
			return `€${cost.amount}`;
		case "GBP":
			return `£${cost.amount}`;
		case "USD":
			return `$${cost.amount}`;
	}
};
