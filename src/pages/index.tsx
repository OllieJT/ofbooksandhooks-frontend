import React from "react";
import Head from "next/head";
import { ViewHomepage } from "../components/view/view-homepage";
import { getPageHome } from "../lib/groq/groq-page-home";
import { GetStaticProps } from "next";
import { CardSize, handleCardArticle, handleCardCollection } from "../components/card";
import { GroqHome } from "../lib/db/groq-home";

interface Props {
	homepage: GroqHome;
}

const Home = ({ homepage }: Props): React.ReactElement => {
	console.log({ homepage });

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			<ViewHomepage
				featured={handleCardArticle({
					document: homepage.featured,
					size: CardSize.Large,
				})}
				cards={homepage.blocks.map((doc) => {
					switch (doc._type) {
						case "article":
							return handleCardArticle({
								document: doc,
								size: CardSize.Small,
							});
						case "collection":
							return handleCardCollection({
								document: doc,
								size: CardSize.Small,
							});
					}
				})}
			>
				<main>{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}</main>
			</ViewHomepage>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const data = await getPageHome(preview);

	return {
		props: {
			preview,
			...data,
		},
		revalidate: 1,
	};
};

export default Home;
