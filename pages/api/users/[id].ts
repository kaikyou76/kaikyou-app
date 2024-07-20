import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {method, body, query} = req//method, body, queryがreqに格納されています。

  switch (method) {
    case 'GET':
        const user = await prisma.user.findUnique({
            where: {
                id: Number(query.id)
            },
            select: {
                id: true,
                name: true,
                email: true
            },
          })
          res.status(200).json(user)
      break

      case 'DELETE':
        const deletedUser = await prisma.user.delete({
          where: {
            id: Number(query.id),
          },
          select: {
            id: true,
          },
        })
        res.status(200).json({ message: `UserID ${deletedUser.id} was deleted` })
        break      

      case 'PUT':
        const updateUser = await prisma.user.update({
          where: {
            id: Number(query.id),
          },
          data: {
            email: body.email,
            name: body.name,
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        })
        res.status(200).json(updateUser)
      break     

    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
      res.status(405).end(`${method} method not allowed`)
  }

}