"use client"
import { useAppDispatch } from '@/Redux/ReduxHooks'
import { increment, useCounter } from '@/Redux/Slices/CounterSlices'
import { DatePickerDemo } from '@/components/DatePickerDemo'
import React, { useState } from 'react'
import { BellDot, BookmarkX, MenuSquare, Search, User, X, XCircle } from "lucide-react"
import SingleChatListComponent from '@/components/SingleChatListComponent'
import { RightSideBarClose, RightSideBarOpen, useRightSideBarSatatus } from '@/Redux/Slices/RightSlideBarSlices'

const page = () => {
  const [asideBar, setAsideBar] = useState(false)
  const [button, setButton] = useState(false)
  const dispatch = useAppDispatch()
  const rightSidebar = useRightSideBarSatatus()
  console.log('rightSidebar', rightSidebar)


  return (
    <>
      <main className='h-screen w-screen'>
        <div className='w-full h-full flex items-center justify-center'>
          <aside className={`w-[360px] h-full  ${asideBar ? "translate-x-1" : ""} -translate-x-[100%] md:translate-x-[0%] transition-all duration-300 fixed inset-x-0  `}>
            <div className='w-full h-full  space-y-3  '>
              <div className='h-1/6 p-4 bg-blue-200'>
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
                  <h1 className='text-2xl text-black'>Messaging</h1>
                  <BellDot />
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
          <div className='md:w-[calc(100%-360px)] w-full h-full  bg-primary ml-0 md:ml-[360px]'>
            <div className='w-full h-full flex '>
              {/* <div className={`${button ? "w-9/12" : "w-full"}`}>
                <header className=' bg-white'>
                  <button className='h-full md:hidden inline-block'>
                    <MenuSquare className='my-auto ml-4' onClick={() => setAsideBar(!asideBar)} />
                  </button>
                </header>
                <button onClick={() => { setButton(!button) }}>sdf</button>
                <div></div>
              </div>
              <div className={`${button ? "w-3/12" : "w-0"} duration-100 ease-in-out transition-all bg-red-700 h-full`}>

              </div> */}
              <div className={`${rightSidebar ? "w-[calc(100%-360px)]" : "w-full"}`} onClick={() => { dispatch(RightSideBarOpen()) }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam nobis nesciunt exercitationem fugiat dolores voluptatem, molestiae vitae quibusdam ullam sit earum veritatis fuga cumque repellendus deserunt animi iure minima!
              </div>
              <div className={`w-[360px] h-full bg-black flex md:fixed inset-x-full duration-300 ${rightSidebar ? "-translate-x-full" : ""} `}>
                <div className='w-full h-full'>
                  <header className='h-16 bg-white'>
                    <XCircle className='h-full my-auto ml-4' onClick={() => { dispatch(RightSideBarClose()) }} />
                  </header>
                </div>
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