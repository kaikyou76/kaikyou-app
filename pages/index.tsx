import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Home() {

  useEffect(() => {
    (async () =>{
      const res = await fetch('/api/users')
      const users =await res.json()
      console.log(users);

    })()    
  }, [])
  
  return (
     <Layout>
      <div className='flex flex-col justify-center items-center' >
        <h2 className='text-4xl text-black font-sans p-4 mt-6'>
           Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h2>
      </div>
    </Layout>
  )
}
