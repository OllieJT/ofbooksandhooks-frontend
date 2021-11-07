import { NextSeo } from "next-seo";
import { ButtonText } from "@components/button/button-text";
import { LayoutSimple } from "@components/layout/layout-simple";

const TestPage = (): React.ReactElement => {
	return (
		<>
			<NextSeo title="Articles" />
			<LayoutSimple>
				<hr />
				<ButtonText onClick={() => alert("Hello World")} label="Load More" />
				<ButtonText
					isActive={true}
					onClick={() => alert("Hello World active")}
					label="Load More (active)"
				/>
				<ButtonText
					isLoading={true}
					onClick={() => alert("Hello World loading")}
					label="Load More (loading)"
				/>
				<hr />
				<ButtonText
					theme="green"
					onClick={() => alert("Hello World")}
					label="Load More"
				/>
				<ButtonText
					theme="green"
					isActive={true}
					onClick={() => alert("Hello World active")}
					label="Load More (active)"
				/>
				<ButtonText
					theme="green"
					isLoading={true}
					onClick={() => alert("Hello World loading")}
					label="Load More (loading)"
				/>
				<hr />
				<ButtonText
					theme="yellow"
					onClick={() => alert("Hello World")}
					label="Load More"
				/>
				<ButtonText
					theme="yellow"
					isActive={true}
					onClick={() => alert("Hello World active")}
					label="Load More (active)"
				/>
				<ButtonText
					theme="yellow"
					isLoading={true}
					onClick={() => alert("Hello World loading")}
					label="Load More (loading)"
				/>
			</LayoutSimple>
		</>
	);
};

export default TestPage;
