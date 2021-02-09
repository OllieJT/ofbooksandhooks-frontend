// @ts-nocheck
import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { SerializerBlock_Block } from "../../../lib/schema-serializer";

export const BlockRenderer = (props: SerializerBlock_Block) => {
	const { style = "normal" } = props.node;

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
		console.log({ BlockRenderer: props.node });
		return props.children;
	}

	// Fall back to default handling
	return BlockContent.defaultSerializers.types.block(props);
};
