import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { ExampleComponent } from "../components/example";

export const getServerSideProps: GetServerSideProps<any> = async () => {
	// Fetch data from external API
	const res = await fetch(`http://localhost:3000/api/hello-world?name=Ollie`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
};

const Home = ({ data }): React.ReactElement => {
	return (
		<div>
			<Head>
				<title>Homepage</title>
			</Head>

			<main>
				<pre>{JSON.stringify(data, null, 4)}</pre>
				<ExampleComponent />
			</main>
		</div>
	);
};

export default Home;
