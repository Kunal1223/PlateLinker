import React from 'react'
import LoginerrorAni from '../assets/loginfirst.json'
import Lottie from 'lottie-react';  

const LoginError = () => {
  return (
    <>
    <div className='mt-16'>
        <Lottie animationData={LoginerrorAni} className='animation h-72'  />
        <h1 className='text-red-600 font-bold text-4xl text-center' >Please Login First.</h1>
    </div>
    </>
  )
}

export default LoginError