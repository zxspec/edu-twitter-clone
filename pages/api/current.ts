import { serverAuth } from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        const { currentUser } = await serverAuth(req)
        return res.status(200).json(currentUser)
    } catch (err) {
        console.error('### err: ', err)
        return res.status(400).end();
    }
}

export default handler