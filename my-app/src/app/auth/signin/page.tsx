import Image from 'next/image'
import React from 'react'
import SigninImage from "../../../../public/images/signin.jpg"

const page = () => {
    return (
        <div className='w-screen '>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:w-4/12 w-0'>
                    <Image src={SigninImage} className='max-w-full h-screen ' alt='signin' />
                </div>
                <div className='md:w-8/12 md:px-20 px-10 w-full flex flex-col space-y-20'>
                    <h1 className='text-5xl'>Sign in To Your Account</h1>
                    <div className='flex flex-col space-y-5   flex-wrap'>
                        <input className=' md:w-1/2 max-w-full border rounded border-black outline-none h-12 p-3 ' placeholder='Mobile Number' type="text" />
                        <input className='md:w-1/2 max-w-full border rounded border-black p-3 outline-none h-12' placeholder='Password' type="text" />
                        <button className='md:w-1/2 max-w-full bg-primary rounded h-12 text-white font-bold'>Login</button>
                    </div>
                    <div>
                        <h2>Forget Password !</h2>
                        <h2 className='text-blue-700'>Register hee if you have no account</h2>
                    </div>
                    <div>
                        Terms & Conditions
                    </div>
                </div>

            </div>
        </div>
    )
}
export default page