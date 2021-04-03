import React from "react";
import Head from "next/head";
import { ViewHomepage } from "../components/view/view-homepage";

const Home = (): React.ReactElement => {
	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>
			<ViewHomepage>
				<main>{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}</main>
			</ViewHomepage>
		</>
	);
};

export default Home;
