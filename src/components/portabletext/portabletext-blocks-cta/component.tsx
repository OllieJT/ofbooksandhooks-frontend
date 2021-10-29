import style from "./styles.module.scss";

type TextSize = "xx-large" | "x-large" | "regular";

export type Props = {
	title?: string;
	size?: "xx-large" | "x-large" | "regular";
	url: string;
	label: string;
};

const handleTextSize = (size: TextSize) => {
	switch (size) {
		case "regular":
			return `var(--font-size-reg)`;
		case "x-large":
			return `var(--font-size-lg)`;
		case "xx-large":
			return `var(--font-size-xlg)`;
	}
};
//todo:Finish implementing!!!
export const BlockCta = ({ size = "x-large", title, url, label }: Props) => {
	return (
		<div className={style.container}>
			<h5 className={style.title} style={{ fontSize: handleTextSize(size) }}>
				{title}
			</h5>
			<h6 className={style.button}>
				<a href={url} target="_blank" rel="noreferrer">
					{label}
				</a>
			</h6>
		</div>
	);
};
