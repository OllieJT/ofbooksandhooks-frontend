import { CurrentUser } from "next-sanity";
import { useCurrentUser } from "../../../lib/sanity";
import style from "./styles.module.scss";

interface User extends CurrentUser {
	role: string;
}

export const LayoutEditor = () => {
	const currentUser = useCurrentUser();
	if (!currentUser.data) {
		return null;
	}
	//@ts-ignore
	const { name, profileImage, role }: User = currentUser.data;

	return (
		<div className={style.container}>
			<abbr title={`${name}: ${role}`}>
				<img src={profileImage} alt={name} width={64} height={64} />
			</abbr>
		</div>
	);
};
