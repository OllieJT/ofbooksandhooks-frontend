import "../styles/index.scss";
import React from "react";
import type { AppProps } from "next/app";
import { LayoutGlobal } from "@components/layout/layout-global";
import { QueryClient, QueryClientProvider } from "react-query";
import { SettingsProvider } from "@lib/providers/settings";
import { TaxonomyProvider } from "@lib/providers/taxonomy";

import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";
import "@fontsource/sen/800.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 900000 } },
});

const isDev = process.env.NODE_ENV === "development";
const configuration: MetadataConfiguration = {
	color: "#105070",

	site_name: "Of Books &amp; Hooks",
	site_url: isDev ? "http://localhost:3000" : "todo.todo",
	site_title: "📚 & 🧶",

	twitter_username: "todo",
	twitter_id: "todo",
};

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<QueryClientProvider client={queryClient}>
			<SettingsProvider>
				<TaxonomyProvider>
					<DefaultSeo
						title={configuration.site_name}
						titleTemplate={`%s | ${configuration.site_title}`}
						openGraph={{
							type: "website",
							locale: "en_US", //en_GB
							url: configuration.site_url,
							site_name: configuration.site_name,
						}}
						twitter={
							configuration.twitter_username
								? {
										handle: `@${configuration.twitter_username}`,
										site: `@${configuration.twitter_username}`,
										cardType: "summary_large_image",
								  }
								: undefined
						}
						additionalMetaTags={[
							{
								name: "viewport",
								content: "width=device-width,initial-scale=1",
							},
							{
								name: "twitter:site:id",
								content: configuration.twitter_id,
							},

							{
								name: "apple-mobile-web-app-title",
								content: configuration.site_name,
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

							{ name: "msapplication-config", content: "/browserconfig.xml" },
							{
								name: "msapplication-TileColor",
								content: configuration.color,
							},
							{ name: "theme-color", content: configuration.color },

							{
								name: "developer",
								content: "TheOllieJT",
							},
							{
								name: "message",
								content: "Hello curious code wrangler... curious about how this site was built, eh? You can find me on twitter @TheOllieJT",
							},
						]}
					/>
					<Head>
						<link href={configuration.site_url} rel="bookmark" title={configuration.site_name} />
						<link rel="icon" href="/favicon.svg" />
						<link rel="manifest" href="/manifest.json" />
					</Head>
					<LayoutGlobal>
						<Component {...pageProps} />
					</LayoutGlobal>
				</TaxonomyProvider>
			</SettingsProvider>
		</QueryClientProvider>
	);
};

export default MyApp;
