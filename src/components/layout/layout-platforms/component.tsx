import style from "./styles.module.scss";
import Link from "next/link";
import { Platform } from "../../../lib/schema";
import { resolveSocialIcon } from "../../../utility/resolve-platform";

interface PlatformProps {
	links: Platform[];
}

export const LayoutPlatforms = ({ links }: PlatformProps): React.ReactElement => {
	return (
		<ul className={style.list}>
			{links.map(({ name, link }) => (
				<li className={style.item} key={name + link.url}>
					<Link href={link.url} passHref as="a" prefetch>
						<p>{resolveSocialIcon(name)}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};
