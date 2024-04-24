// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface storyData {
  
}


const handleGet = async (req: NextApiRequest, res: NextApiResponse<storyData>, id : string | string[]) => {
    if (typeof id === "string") {
      const storyId = parseInt(id)
      const story = await prisma.story.findFirst({where: {id: storyId}})
      res.status(200).json({storySuccess: true, ...story})
    } else {
      res.status(200).json({ storySuccess : false})
    }
}


export default async function handler (req: NextApiRequest, res: NextApiResponse<storyData>) {
    const id = req.query.storyId
    if (req.method == 'GET' && id) {
        handleGet(req, res, id)
    } else {
      res.status(200).json({ storySuccess : false})
    }
  }