import React from 'react'
import registrationIMG from '../../public/Assets/process/registration.png'
import chat from '../../public/Assets/process/couplechatting.webp'
import select from '../../public/Assets/process/select.png'
import Image from 'next/image'

export default function Process() {
    return (
        <>
            <div className='px-3 lg:px-11 lg:px-24'>

                <div className='py-12'>
                    {/* <p className='text-base text-center md:text-lg text-[#72727d] mb-4'>| Process |</p> */}
                    <h1 className=' font-medium text-center text-2xl md:text-4xl mb-4 text-[#fc4a2d]'>Discover your soulmate with DivineDuos</h1>
                    <p className='text-sm text-center md:text-base text-[#72727d]'>Unlock your soulmate's profile in three effortless steps with DivineDuos: Genuine connections made simple</p>
                </div>
                <div className='grid  md:grid-cols-3 gap-y-10 md:gap-3 flex-warp'>

                    <div className="rounded-xl bg-white p-3 md:p-6 text-center  shadow-md">
                       
                        <div className='flex justify-center mb-3'>
                            <Image src={registrationIMG} alt="registrationIMG" width={150} height={150} priority={true}/>
                        </div>
                        <div>
                            <h1 className="text-darken mb-3  text-xl font-medium lg:h-14 lg:px-14">Register with DivineDuos Matrimony</h1>
                            <p className="px-4 text-gray-500">Unveil your true self and invite genuine connections by registering with DivineDuos: Your personality, your story, your match</p>
                        </div>
                        
                    </div>
                
                    <div className="rounded-xl bg-white p-3 md:p-6 flex md:flex-col  flex-col-reverse text-center shadow-md">
                        <div className='md:mb-6'>
                            <h1 className="text-darken mb-3  text-xl font-medium lg:h-14 lg:px-14">Customize Your Ideal Match</h1>
                            <p className="px-4 text-gray-500">Tailor your partner preferences and let our advanced recommendation engine guide you to compatible profiles</p>
                        </div>
                        <div className='flex justify-center mb-4 md:mb-0'>
                            <Image src={select} alt="registrationIMG" width={150} height={200} style={{width:'auto' , height:"10rem"}}/>
                        </div>
                    </div>

                    <div className="rounded-xl bg-white p-3 md:p-6  text-center shadow-md">
                        <div className='flex justify-center mb-3'>
                            <Image src={chat} alt="registrationIMG" width={200} height={200} priority={true} style={{width:'auto' , height:"10rem"}}/>
                        </div>
                        <div>
                            <h1 className="text-darken mb-3  text-xl font-medium lg:h-14 lg:px-14">Engage in Meaningful Conversations</h1>
                            <p className="px-4 text-gray-500">Explore our DivineDuos Matrimony app, effortlessly connect with genuine and verified profiles through calls or chat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
