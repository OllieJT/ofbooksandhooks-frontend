import * as React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render(): React.ReactElement {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
