import { Person } from "../../../lib/schema";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import { slugify } from "../../../utility";
import { Profile } from "../../profile";
interface Props {
	title: string;
	people: Person[];
}

export const BlockPeople = ({ title, people = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{people.map(({ knownAs, name, photo, tags }) => {
				const avatar =
					photo &&
					handleSanityImage(photo, {
						width: 160,
						height: 160,
						alt: photo?.alt,
						fit: "min",
					});

				return (
					<li key={knownAs + name} className={style.item}>
						<Profile
							name={name}
							subtitle={knownAs}
							tags={tags}
							avatar={avatar}
							//link="/"
						/>
					</li>
				);
			})}
		</ul>
	);
};
