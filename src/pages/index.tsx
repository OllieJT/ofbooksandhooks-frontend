import React from "react";
import Head from "next/head";

const Home = (): React.ReactElement => {
	return (
		<div>
			<Head>
				<title>Homepage</title>
			</Head>

			<main>{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}</main>
		</div>
	);
};

export default Home;
