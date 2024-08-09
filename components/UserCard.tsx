import React from 'react'
import { Card } from 'flowbite-react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { User } from '@prisma/client'

interface Props {
    user: Pick<User, 'id'|'email'|'name'>
}

const UserCard = ({user}: Props) => {
  return (
    <div  className="w-60">
    <Card>

    <div className="flex flex-col items-center pb-10">
      <CheckBadgeIcon
        className="mb-3 rounded-full shadow-lg"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
      <div className="mt-4 flex space-x-3 lg:mt-6">
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add friend
        </a>
      </div>
    </div>
  </Card>
  </div>
  )
}

export default UserCard