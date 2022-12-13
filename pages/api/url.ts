// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import urlSenderWs from '../../common/UrlSender';

type urlData = {
    urlAccepted: boolean,
    url : string | undefined
}

export default function handler(req: NextApiRequest, res: NextApiResponse<urlData>) {
    if (req.method == 'POST') {
        const url = req.body.url;
        try {
            urlSenderWs.send(url);
            res.status(200).json({ urlAccepted : true, url : url });
        } catch {
            res.status(200).json({ urlAccepted : false, url : undefined });
        }
    } else {
        res.status(200).json({ urlAccepted : false, url : undefined });
    }
}