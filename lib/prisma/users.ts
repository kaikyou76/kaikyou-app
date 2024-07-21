import { prisma } from "../../utils/prismaClient"
import { User } from "@prisma/client"

export const prismaGetUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
      })
      return users
}

export const prismaCreateUser = async (body: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
    const createdUser = await prisma.user.create({
        data: {
           email: body.email,
           name: body.name,
           password: body.password
        },
        select: {
           id: true,
           name: true,
           email: true
        },
   })
   return createdUser
}