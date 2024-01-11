"use client"
import Image from 'next/image'
import React from 'react'
import SigninImage from "../../../../public/images/signin.jpg"
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from 'formik'

const page = () => {
    const initialValues = {
        otp: ""
    }
    const schemaValidation = Yup.object().shape({
        otp: Yup.string().required()
    })
    const onSubmit = (values: any) => console.log('values', values)



    return (
        <div className='w-screen '>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:w-4/12 w-0'>
                    <Image src={SigninImage} className='max-w-full h-screen ' alt='signin' />
                </div>
                <div className='md:w-8/12 md:px-20 px-10 w-full flex flex-col space-y-20'>
                    <h1 className='text-5xl'>Enter  Digit OTP</h1>
                    <div className='flex flex-col space-y-5   flex-wrap'>
                        <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={onSubmit}>
                            {
                                ({ values, errors }) => {
                                    return (
                                        <Form className='space-y-4'>
                                            <div className='flex flex-col space'>

                                                <Field className=' md:w-1/2 max-w-full border rounded border-black outline-none h-12 p-3 ' name="otp" placeholder='Otp' type="text" />
                                                <span className='error'>
                                                    <ErrorMessage name='otp' />
                                                </span>
                                            </div>

                                            <button type='submit' className='md:w-1/2 w-full  bg-primary rounded h-12 text-white font-bold'>Verify</button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>

                    </div>
                    <div>
                        {/* <h2>Forget Password !</h2> */}
                        {/* <h2 className='text-blue-700'>Register hee if you have no account</h2> */}
                    </div>
                    <div>
                        {/* Terms & Conditions */}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default page