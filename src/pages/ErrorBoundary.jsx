import React from 'react'
import { Link } from 'react-router-dom';

const ErrorBoundary = () => {
  return (
    <>
      <div className='flex justify-center flex-col items-center h-[100vh]'>
        <h1 className='text-2xl'>Page not found</h1>
        <Link to="/" className='border border-solid border-[#FC5959] rounded px-[3rem] py-[.5rem] bg-[#FC5959] mt-3'>Home</Link>
      </div>
    </>
  )
}

export default ErrorBoundary