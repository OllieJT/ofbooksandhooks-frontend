import React from "react";
import Head from "next/head";
import { ViewHomepage } from "../components/view/view-homepage";
import { getPageHome, GroqHome } from "../lib/groq/homepage";
import { GetStaticProps } from "next";
import { CardSize, handleCardArticle, handleCardCollection } from "../components/card";

interface Props {
	data: GroqHome;
}

const Home = ({ data }: Props): React.ReactElement => {
	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			<ViewHomepage
				featured={handleCardArticle({
					document: data.featured,
					size: CardSize.Large,
				})}
				cards={data.blocks.map((doc) => {
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
			data,
		},
		revalidate: 1,
	};
};

export default Home;
