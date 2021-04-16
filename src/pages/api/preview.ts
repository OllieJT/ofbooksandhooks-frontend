import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { previewClient } from "../../lib/sanity";
import { Article } from "../../lib/schema";
import { resolveUrl } from "../../utility/resolve-url";

export default async function preview(req: NextApiRequest, res: NextApiResponse<any>) {
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (
		req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
		!req.query.slug
		// || !req.query.type
	) {
		return res.status(401).json({ message: "Invalid token" });
	}

	// Fetch the headless CMS to check if the provided `slug` exists
	//const post: ArticleQuery = await getArticlePage(slug, true);
	const post:
		| Article
		| undefined = await previewClient.fetch(
		groq`*[_type == "article"&& slug.current == $slug][0]`,
		{ slug: req.query.slug.toString() },
	);

	// If the slug doesn't exist prevent preview mode from being enabled
	if (!post) {
		return res.status(401).json({ message: "Invalid slug" });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the path from the fetched post
	// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

	res.writeHead(307, {
		Location: resolveUrl({
			slug: post.slug.current,
			type: post._type,
		}),
	});
	res.end("Preview mode enabled");
}
