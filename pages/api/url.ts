// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import urlSenderWs from '../../common/UrlSender';

type urlData = {
    urlAccepted: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<urlData>) {
    if (req.method == 'POST') {
        const url = req.body.url;
        try {
            urlSenderWs.send(url);
            res.status(200).json({ urlAccepted : true });
        } catch {
            res.status(200).json({ urlAccepted : false });
        }
    } else {
        res.status(200).json({ urlAccepted : false });
    }
}