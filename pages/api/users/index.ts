import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true
    },
  })
  res.status(200).json(users)
}