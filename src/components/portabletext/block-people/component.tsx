import { handleSanityImageFixed, ImageFit } from "@lib/utility/handle-sanity-image";
import style from "./styles.module.scss";
import { slugify } from "@lib/utility";
import type { Person } from "@lib/groq";
import { CardProfile } from "@components/card/card-profile";
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
					handleSanityImageFixed({
						asset: photo,
						width: 160,
						height: 160,
						fit: ImageFit.Min,
					});

				return (
					<li key={knownAs + name} className={style.item}>
						<CardProfile
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