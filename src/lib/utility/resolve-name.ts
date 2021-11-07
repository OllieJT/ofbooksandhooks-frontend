import type { Person } from "@lib/groq";

export function resolveName(person: Person, withAlias?: boolean) {
	const { nameFirst, nameLast } = person;

	if (withAlias) {
		const alias = `"${person.alias}"`;
		return [nameFirst, alias, nameLast].join(" ");
	} else {
		return [nameFirst, nameLast].join(" ");
	}
}
