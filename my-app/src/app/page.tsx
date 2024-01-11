"use client"
import { useAppDispatch } from '@/Redux/ReduxHooks'
import { increment, useCounter } from '@/Redux/Slices/CounterSlices'
import { DatePickerDemo } from '@/components/DatePickerDemo'
import React, { useState } from 'react'
import { BellDot, MenuSquare, Search, User } from "lucide-react"
import SingleChatListComponent from '@/components/SingleChatListComponent'

const page = () => {
  const [asideBar, setAsideBar] = useState(false)
  const [button, setButton] = useState(false)


  return (
    <>
      <main className='h-screen w-screen'>
        <div className='w-full h-full flex items-center justify-center'>
          <aside className={`w-[360px] h-full  ${asideBar ? "translate-x-1" : ""} -translate-x-[100%] md:translate-x-[0%] transition-all duration-300 fixed inset-x-0  `}>
            <div className='w-full h-full  space-y-3  '>
              <div className='h-1/6 p-4 bg-seco'>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex overflow-hidden">

                  <img
                    src={`https://festumfield.s3.ap-south-1.amazonaws.com/`}
                    className="object-cover w-full h-full"
                    alt="woman"
                  />
                  {/* <div className="icon-user h-full w-full text-chatlook-gray rounded-full text-2xl justify-center items-center flex icon-user overflow-hidden object-cover">
                    <User />
                  </div> */}
                </div>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-2xl text-white'>Messaging</h1>
                  <BellDot color="white" />
                </div>
                <div className='w-full relative'>
                  <input className='bg-primary w-full rounded-md outline-none h-10 placeholder:pl-0 pl-10' placeholder='Search Friend..' type="text" />
                  <Search className='absolute inset-0 translate-x-2 translate-y-2 ' />
                </div>
              </div>
              <div className='overflow-y-auto h-5/6 py-4'>
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
                <SingleChatListComponent />
              </div>
            </div>
          </aside>
          <div className='md:w-[calc(100%-360px)] w-full h-full  bg-red-400 ml-0 md:ml-[360px]'>
            <div className='w-full h-full flex items-center justify-center'>
              <div className={`${button ? "w-9/12" : "w-full"}`}>
                <header className=' bg-white'>
                  <button className='h-full md:hidden inline-block'>
                    <MenuSquare className='my-auto ml-4' onClick={() => setAsideBar(!asideBar)} />
                  </button>
                </header>
                <button onClick={() => { setButton(!button) }}>sdf</button>
                <div></div>
              </div>
              <div className={`${button ? "w-3/12" : "w-0"} duration-100 ease-in-out transition-all bg-red-700 h-full`}>

              </div>
            </div>
          </div>
          <div className='h-full bg-black'>
          </div>
        </div>
      </main >
    </>
  )
}

export default page