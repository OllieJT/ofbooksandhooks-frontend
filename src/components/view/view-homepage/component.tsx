import { CustomImage } from "../../../utility/handle-sanity-image";
import style from "./styles.module.scss";
import Image from "next/image";

interface Props {
	image?: CustomImage;
	children: React.ReactNode;
}

export const ViewHomepage = ({}: Props): React.ReactElement => {
	return (
		<div className={style.container}>
			<div className={style.feature}>feature</div>
			<div className={style.bio}>bio</div>
			<div className={style.small_1}>small_1</div>
			<div className={style.small_2}>small_2</div>
			<div className={style.small_3}>small_3</div>
			<div className={style.small_4}>small_4</div>
			<div className={style.small_5}>small_5</div>
			<div className={style.tall_1}>tall_1</div>
			<div className={style.sidebar}>sidebar</div>
		</div>
	);
};
