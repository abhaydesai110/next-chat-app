import { User } from 'lucide-react'
import React from 'react'

const SingleChatListComponent = () => {
    return (
        <div>
            <div>
                <div
                    className="cursor-pointer p-2.5 notifications-box user-box rounded-lg group hover:bg-primary duration-200"
                >
                    <div
                        className="flex items-center space-x-3"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex overflow-hidden">

                                <img
                                    src={`https://pbs.twimg.com/media/E45iuc1WYAIqfSp?format=jpg&name=900x900`}
                                    className="object-cover w-full h-full"
                                    alt="woman"
                                />
                                {/* <div className="icon-user h-full w-full text-chatlook-gray rounded-full text-2xl justify-center items-center flex icon-user overflow-hidden object-cover">
                                    <User />
                                </div> */}
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 absolute bottom-0 right-0 border border-white"></span>
                        </div>
                        <div className="w-[calc(100%-54px)]">
                            <div className="user-name flex justify-between items-center  ">
                                <h4 className="whitespace-nowrap overflow-ellipsis overflow-hidden capitalize font-bold">
                                    Sagar Kheni
                                </h4>
                                <div className="relative flex items-start ml-auto pr-1">
                                    10:00 AM
                                </div>
                            </div>
                            <div className=" flex items-center justify-between">
                                <span className="whitespace-nowrap text-sm w-[90%] overflow-ellipsis overflow-hidden text-chatlook-sky">

                                    Typing...
                                </span>
                                {/* {val.is_pinned && (
                <span className="mr-3">
                  <img src={ChatPin} height={15} width={15} />
                </span>
              )} */}
                                <span className="p-1 bg-blue-600 text-white rounded-full">
                                    1
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleChatListComponent