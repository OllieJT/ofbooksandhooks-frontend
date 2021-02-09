import "../styles/index.scss";
import React from "react";
import Head from "next/head";
import type { AppProps /* , AppContext */ } from "next/app";
import { DefaultSeo } from "next-seo";
import { Layout } from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<>
			<DefaultSeo
				title="Of Books &amp; Hooks"
				titleTemplate="%s | 📚🧶"
				openGraph={{
					type: "website",
					locale: "en_US",
					url: process.env.URL,
					site_name: "Books & Hooks",
				}}
				// twitter={{handle: "@Dignitas",site: "@Dignitas",cardType: "summary_large_image",}}
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width,initial-scale=1",
					},
					//{name: "twitter:site:id",content: "20734751",},

					{
						name: "apple-mobile-web-app-title",
						content: "Books & Hooks",
					},

					{
						name: "apple-mobile-web-app-capable",
						content: "yes",
					},

					{
						name: "apple-touch-fullscreen",
						content: "yes",
					},

					{
						name: "apple-mobile-web-app-status-bar-style",
						content: "black",
					},

					{
						name: "developer",
						content: "TheOllieJT",
					},
					{
						name: "message",
						content:
							"Hello curious code wrangler... curious about how this site was built, eh? You can find me on twitter @TheOllieJT",
					},
				]}
			/>

			<Head>
				<link
					href={process.env.URL}
					rel="bookmark"
					title="Of Books &amp; Hooks"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Sen:wght@400;800&display=swap"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
