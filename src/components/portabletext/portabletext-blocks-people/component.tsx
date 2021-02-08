import { Person } from "../../../lib/schema";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";
import { slugify } from "../../../utility";
interface Props {
	title: string;
	people: Person[];
}

export const BlockPeople = ({ title, people = [] }: Props) => {
	return (
		<section className={style.container} id={slugify(title)}>
			<ul>
				{people.map(({ knownAs, name, photo, tags }) => {
					const avatar =
						photo &&
						handleSanityImage(photo.asset, {
							width: 1280,
							height: 720,
							alt: photo?.alt,
						});

					return (
						<li>
							{avatar && (
								<Image
									src={avatar.url}
									alt={avatar.alt || name}
									width={avatar.width}
									height={avatar.height}
								/>
							)}
							<header>
								<p>{name}</p>
								<p>{knownAs}</p>
							</header>
							<aside>
								{tags?.map((tag) => (
									<p>{tag}</p>
								))}
							</aside>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
