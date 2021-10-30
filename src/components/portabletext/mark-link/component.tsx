//import style from "./styles.module.scss";
import Link from "next/link";

interface MarkLinkProps {
	url: string;
	children: React.ReactNode;
}

export const MarkLink = ({ children, url }: MarkLinkProps) => {
	return (
		<Link href={url} passHref>
			<a target="_blank">{children}</a>
		</Link>
	);
};
