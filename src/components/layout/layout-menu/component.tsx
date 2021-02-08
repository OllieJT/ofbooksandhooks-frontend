import style from "./styles.module.scss";
import Link from "next/link";

interface LinkProps {
	label: string;
	link: string;
}
interface MenuProps {
	links: LinkProps[];
}

export const LayoutMenu = ({ links }: MenuProps): React.ReactElement => {
	return (
		<ul className={style.list}>
			{links.map(({ label, link }) => (
				<li className={style.item} key={label + link}>
					<Link href={link} passHref as="a" prefetch>
						<p>{label}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};
