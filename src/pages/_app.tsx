import "../styles/index.scss";
import React from "react";
import Head from "next/head";
import type { AppProps /* , AppContext */ } from "next/app";

const meta = {
	siteName: "todo",
	siteUrl: "todo",
	twitter: {
		username: "TheOllieJT",
		id: "427323948",
	},
};

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<>
			<Head>
				<meta
					content="width=device-width,initial-scale=1"
					key="viewport"
					name="viewport"
				/>

				<link href="/favicon.ico" rel="icon" />

				<meta content={meta.siteName} property="og:site_name" />
				<meta content={meta.twitter.username} property="twitter:site" />
				<meta content={meta.twitter.id} property="twitter:site:id" />

				<meta
					content={meta.siteName}
					key="apple-webapp-title"
					name="apple-mobile-web-app-title"
				/>
				<meta
					content="yes"
					key="apple-webapp-capable"
					name="apple-mobile-web-app-capable"
				/>
				<meta
					content="yes"
					key="apple-touch-fullscreen"
					name="apple-touch-fullscreen"
				/>
				<meta
					content="black"
					key="apple-webapp-style"
					name="apple-mobile-web-app-status-bar-style"
				/>
				<meta content="OllieJT <olliejt.com>" key="designer" name="designer" />
				<link href={meta.siteUrl} rel="bookmark" title={meta.siteName} />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
