import { LogOut, Star, DollarSign, Bookmark } from 'lucide-react'
import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="card bg-linear-to-b from-green-100 to-blue-300 border-3 border-white rounded-3xl relative shadow-2xl shadow-black-500/50 inset-shadow-sm inset-shadow-sky-300" >
                <div className="card-body p-5 w-70">
                    <div className="logo flex justify-end " >
                        <LogOut className='rotate-270' />
                    </div>
                    <div className="img-content">
                        <img className='w-14 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhU2Lws7NaBLMJuHhyj_5hdeVsA6fzQZHo8Q&s" alt="profectional girl image" />

                        <div className='leading-5'>
                            <h1 className='font-semibold font-sans text-2xl'>Dolly Tagde</h1>
                            <p className='text-[#879093] font-medium'>Product Desiginer</p>
                        </div>
                        <div className='flex py-2 gap-4'>
                            <button className='text-[10px] text-[#879093] bg-blue-100 px-2 py-1 rounded-2xl cursor-pointer'>
                                Figma
                            </button>

                            <button className='text-[10px] text-[#879093] bg-blue-100 px-2 py-1 rounded-2xl cursor-pointer'>
                                UX design
                            </button>
                        </div>

                    </div>
                    <div className="info-rating flex justify-around py-3 text-center">
                        <div className="rating leading-4 ">
                            <div>
                                <div className="flex items-center text-[13px] font-bold"><Star className='font-bold'fill size={13} strokeWidth={1.25} />4.5 </div></div>
                            <p className='text-[#879093] text-[12px] font-semibold'>rating</p>
                        </div>
                        <div className="earning leading-4">
                            <div>
                                <div className="flex items-center text-[13px] font-bold"><DollarSign fill size={13} strokeWidth={1.25} />15K+</div></div>
                            <p className='text-[#879093] text-[12px] font-semibold'>earning</p>
                        </div>
                        <div className="rate leading-4">
                            <div>
                                <div className="flex items-center text-[13px] font-bold"> <DollarSign fill size={13} strokeWidth={1.25} />80/hr</div></div>
                            <p className='text-[#879093] text-[12px] font-semibold'>rate</p>
                        </div>
                    </div>
                    <div className="save-content flex justify-between">
                        <button className='bg-blue-200 px-10 text-[14px] cursor-pointer font-semibold rounded-3xl inset-shadow-sm inset-shadow-white'>Get in Touch</button>
                      <div className='bg-white p-3 rounded-full'>  <Bookmark className='bg-white rounded-full ' size={24} strokeWidth={1.25} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card