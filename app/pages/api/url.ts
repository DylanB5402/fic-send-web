// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import urlSenderWs from '../../common/UrlSender'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface urlData {
  urlAccepted: boolean
  url: string | undefined
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<urlData>) {
  if (req.method === 'POST') {
    const url = req.body.url
    try {
      urlSenderWs.on("open", () => {});
      urlSenderWs.send(url)
      console.log(687)
      const story = await prisma.story.create({
        data: {
          url
        }
      })
      console.log(story)
      res.status(200).json({ urlAccepted: true, url })
    } catch (error : {code : string} | unknown) {
      urlSenderWs.send(url)
      res.status(200).json({ urlAccepted: true, url: undefined })
    }
  } else {
    res.status(200).json({ urlAccepted: false, url: undefined })
  }
}

