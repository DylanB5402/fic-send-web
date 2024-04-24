// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface storyData {
  
}


const handlePost = (req: NextApiRequest, res: NextApiResponse<storyData>) => {
    
}

const handleGet = async (req: NextApiRequest, res: NextApiResponse<storyData>) => {
    const allStories = await prisma.story.findMany(undefined)
    return res.status(200).json(allStories)
}


export default async function handler (req: NextApiRequest, res: NextApiResponse<storyData>) {
    if (req.method === 'POST') {
        handlePost(req, res)
    } else if (req.method == 'GET') {
        return handleGet(req, res)
    } else {
        res.status(200).json({ storySuccess : false})
    }
  }