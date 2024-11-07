import { auth } from '@/auth'
import React from 'react'
import SignIn from './(auth)/SignIn/page'

const Home = async() => {
  const session = await auth()

  if(!session?.user) return <SignIn />
  return (
    <div className='flex justify-center items-center mx-auto min-h-screen'>
      {session.user.name}
    </div>
  )
}

export default Home
