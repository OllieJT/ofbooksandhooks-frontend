import type { NextApiRequest, NextApiResponse } from "next";

export const HelloWorld = async (
	req: NextApiRequest,
	res: NextApiResponse<any>,
): Promise<void> => {
	const { name } = req.query;

	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ msg: `Hello ${name || "world"}` }));
};

export default HelloWorld;
