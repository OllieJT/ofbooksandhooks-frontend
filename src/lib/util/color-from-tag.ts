import type { THEME_COLOR } from "@inqling/components/types";

export function colorFromTag(t: string): THEME_COLOR {
	const tag = t.toLowerCase();
	switch (tag) {
		case "crochet":
		case "crochettips":
		case "crochetpatterns":
			return "blue";
		case "diy":
		case "tips":
		case "recommendations":
		case "challenges":
			return "purple";
		case "reading":
		case "readinglife":
		case "readingguides":
		case "readingchallenges":
		case "booklists":
			return "pink";
		case "editorial":
		case "blog":
			return "green";
		case "guestpost":
		case "guest-post":
			return "red";
		case "ofbooks":
		case "books":
			return "primary";
		case "hooks":
		case "ofhooks":
		case "patterns":
			return "secondary";

		default:
			console.log(`Defaulting Tag -> ${t}`);
			return "mono";
	}
}
