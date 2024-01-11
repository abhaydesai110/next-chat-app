"use client"
import Image from 'next/image'
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import SigninImage from "../../../../public/images/registr.jpg"
import { DatePickerDemo } from '@/components/DatePickerDemo'


const page = () => {
  const initialValues = {
    firstname: "",
    surname: "",
    password: "",
    confirmPassword: "",
    dob: "",
    mobile: ""
  }
  const schemaValidation = Yup.object().shape({
    firstname: Yup.string().required(),
    surname: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    dob: Yup.string().required(),
    mobile: Yup.string().required()
  })

  const onSubmit = (values: any) => {
    console.log('values', values)

  }


  return (
    <div className='w-screen '>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='md:w-4/12 w-0'>
          <Image src={SigninImage} className='max-w-full h-screen ' alt='signin' />
        </div>
        <div className='md:w-8/12 md:px-20 px-10 w-full flex flex-col space-y-20'>
          <h1 className='text-5xl'>Register Account</h1>
          <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={onSubmit}>
            {({ values, errors }) => {
              console.log('errors', errors)
              return (
                <>
                  <Form className='flex flex-col '>
                    <div className='w-full md:flex'>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className='w-full border rounded border-black outline-none h-12 p-3 ' name="firstname" placeholder='First Name' type="text" />
                        <span className='error'>

                          <ErrorMessage name='firstname' />
                        </span>
                      </div>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className='w-full max-w-full border rounded border-black p-3 outline-none h-12' name='surname' placeholder='Sur Name' type="text" />
                        <span className='error'>
                          <ErrorMessage name='surname' />
                        </span>
                      </div>
                    </div>
                    <div className='w-full md:flex'>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className=' w-full border rounded border-black outline-none h-12 p-3 ' name="mobile" placeholder='Mobile Number' type="text" />
                        <span className='error'>

                          <ErrorMessage name="mobile" />
                        </span>
                      </div>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className='w-full border rounded border-black p-3 outline-none h-12' name="dob" placeholder='Date of Birth' type="text" />

                        <span className='error'>

                          <ErrorMessage name="dob" />
                        </span>
                      </div>
                    </div>
                    <div className='w-full md:flex'>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className='w-full border rounded border-black outline-none h-12 p-3 ' name="password" placeholder='Password' type="text" />
                        <span className='error'>

                          <ErrorMessage name="password" />
                        </span>
                      </div>
                      <div className='md:w-1/2 w-full px-2 md:py-5 py-3'>
                        <Field className='w-full border rounded border-black outline-none h-12 p-3 ' name="confirmPassword" placeholder='Confirm Password' type="text" />
                        <span className='error'>
                          <ErrorMessage name="confirmPassword" />
                        </span>
                      </div>
                    </div>
                    <button className=' w-48 ml-2  bg-primary rounded h-12 text-white font-bold'>Register</button>
                  </Form>
                </>
              )
            }}
          </Formik>
          <div>
            <h2 className='text-blue-700 -mt-16'>Sign in  if you have already an account</h2>
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