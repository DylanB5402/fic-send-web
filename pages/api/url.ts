// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type urlData = {
    urlAccepted: boolean
}

export default function handler(req: NextApiRequest,res: NextApiResponse<urlData>) {
    if (req.method == 'POST') {
        const url = req.body.url;
        console.log(url);
        res.status(200).json({ urlAccepted : true });
    } else {
        res.status(200).json({ urlAccepted : false });
    }

}