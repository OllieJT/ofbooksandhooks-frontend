// @ts-nocheck
import React from "react";
import BlockContent from "@sanity/block-content-to-react";

export const BlockRenderer = (props: any) => {
	//console.log({ BlockRenderer: props });
	const { style } = props.node;

	if (/^h\d/.test(style)) {
		const level = style.replace(/[^\d]/g, "");
		return React.createElement(
			style,
			{ className: `heading-${level}` },
			props.children,
		);
	}

	if (style === "blockquote") {
		return <blockquote>- {props.children}</blockquote>;
	}

	if (style === "normal") {
		return props.children;
	}

	console.log({ RENDER: props });

	// Fall back to default handling
	return BlockContent.defaultSerializers.types.block(props);
};
