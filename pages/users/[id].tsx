import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { User } from '@prisma/client'
import UserCard from '../../components/UserCard'
import { useRouter } from 'next/router'
import UpdateForm from '../../components/UpdateForm'

export default function UserDetails() {

  const [user, setUser] = useState<Pick<User, 'id'|'email'|'name'>>()

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    (async () =>{
        if(router.isReady){
            const res = await fetch(`/api/users/${id}`)
            const user =await res.json()
            setUser(user)
            console.log(user);
        }
    })()    
  }, [id])
  
  return (
     <Layout>
      <div className='flex flex-col justify-center items-center' >
        <h2 className='text-4xl font-black font-sans p-4 mt-6'>
          Update Form
        </h2>
        {user && <UpdateForm user={user} />}
        <h2 className='text-4xl font-black font-sans p-4 mt-6'>
          User Details
        </h2>


        <div className="flex flex-row justify-center items-center">
        {
          user && <UserCard user={user} isDetailds={true}/>

        }
        </div>      
      </div>
    </Layout>
  )
}
