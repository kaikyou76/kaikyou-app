import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prismaClient'
import { prismaCreateUser, prismaGetUsers } from '../../../lib/prisma/users'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {method, body} = req//メソッドがreqに格納されています。

  switch (method) {
    case 'GET':
        // const users = await prisma.user.findMany({
        //     select: {
        //         id: true,
        //         name: true,
        //         email: true
        //     },
        //   })
        const users = await prismaGetUsers()
          res.status(200).json(users)
      break

    case 'POST':
// 　　　　const createdUser = await prisma.user.create({
//              data: {
//                 email: body.email,
//                 name: body.name,
//                 password: body.password
//              },
//              select: {
//                 id: true,
//                 name: true,
//                 email: true
//              },
//         })
        const createdUser = await prismaCreateUser(body)
        res.status(200).json(createdUser)
      break     

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`${method} method not allowed`)
  }



}