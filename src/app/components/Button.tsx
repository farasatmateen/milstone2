import Link from 'next/link'
import React from 'react'


const Button = () => {
  return (
    <div className='flex justify-around items-center bg-black text-white rounded-md w-20 m-auto mt-32'>
      <Link href={"/"}>Go back</Link>
    </div>
  )
}

export default Button
