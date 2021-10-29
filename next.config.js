module.exports = {
	reactStrictMode: true,
	/* async rewrites() {
		return [
			{
				source: "/news/post",
				destination: "/news",
			},
		];
	}, */
	images: {
		domains: ["cdn.sanity.io"],
		imageSizes: [24, 64, 300],
	},
};
