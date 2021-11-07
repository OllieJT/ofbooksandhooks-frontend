import { handleSanityImageFixed, ImageFit } from "@lib/utility/handle-sanity-image";
import style from "./styles.module.scss";
import { slugify } from "@lib/utility";
import type { Person } from "@lib/groq";
import { CardProfile } from "@components/card/card-profile";
import { resolveName } from "@lib/utility/resolve-name";
interface Props {
	title: string;
	people: Person[];
}

export const BlockPeople = ({ title, people = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{people.map((person) => {
				const avatar =
					person.avatar &&
					handleSanityImageFixed({
						asset: person.avatar,
						width: 160,
						height: 160,
						fit: ImageFit.Min,
					});

				return (
					<li key={person._id} className={style.item}>
						<CardProfile
							name={resolveName(person)}
							subtitle={person.alias}
							tags={person.tags}
							avatar={avatar}
						/>
					</li>
				);
			})}
		</ul>
	);
};
