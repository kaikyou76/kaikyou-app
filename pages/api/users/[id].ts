import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prismaClient'
import { prismaDeleteUserById, prismaGetUserById, prismaUpdateUserById } from '../../../lib/prisma/users'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {method, body, query} = req//method, body, queryがreqに格納されています。

  switch (method) {
    case 'GET':
        // const user = await prisma.user.findUnique({
        //     where: {
        //         id: Number(query.id)
        //     },
        //     select: {
        //         id: true,
        //         name: true,
        //         email: true
        //     },
        //   })
        const user = await prismaGetUserById(query.id)
          res.status(200).json(user)
      break

      case 'DELETE':
        // const deletedUser = await prisma.user.delete({
        //   where: {
        //     id: Number(query.id),
        //   },
        //   select: {
        //     id: true,
        //   },
        // })
        const deletedUser = await prismaDeleteUserById(query.id)
        res.status(200).json({ message: `UserID ${deletedUser.id} was deleted` })
        break      

      case 'PUT':
        // const updateUser = await prisma.user.update({
        //   where: {
        //     id: Number(query.id),
        //   },
        //   data: {
        //     email: body.email,
        //     name: body.name,
        //   },
        //   select: {
        //     id: true,
        //     name: true,
        //     email: true,
        //   },
        // })
        const updateUser = await prismaUpdateUserById(query.id, body)
        res.status(200).json(updateUser)
      break     

    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
      res.status(405).end(`${method} method not allowed`)
  }

}