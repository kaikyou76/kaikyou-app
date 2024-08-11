import React from 'react'
import { Card } from 'flowbite-react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { User } from '@prisma/client'
import Link from 'next/link'

interface Props {
    user: Pick<User, 'id'|'email'|'name'>
    isDetailds: boolean
}

const UserCard = ({user, isDetailds}: Props) => {
  return (
    <div  className="w-60">
    <Card>

    <div className="flex flex-col items-center pb-10">
      <CheckBadgeIcon
        className="mb-3 rounded-full shadow-lg"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
      {
        !isDetailds &&(
          <div className="mt-4 flex space-x-3 lg:mt-6">
          <Link
            href={`/users/${user.id}`}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            User Details
          </Link>
        </div>
        )
      }
    </div>
  </Card>
  </div>
  )
}

export default UserCard