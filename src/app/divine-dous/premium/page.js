import React from 'react'
import { FaCheck } from "react-icons/fa";


export default function page() {
    return (
        <div>
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-red-400 ">Pricing</h2>
                        <p class="mb-5 text-sm text-gray-700 md-text-base lg:text-xl">Experience Meaningful Connections with Flowbite Dating's Tailored Plans - Affordable, Flexible, and Designed to Help You Find True Love.</p>
                    </div>
                    <div class="space-y-8 lg:grid   lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div class="flex flex-col p-6 w-full mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-red-400 shadow  xl:p-8 ">
                            <h3 class="mb-4 text-2xl font-semibold">Basic</h3>
                            <p class="font-light text-gray-600 sm:text-lg">Start Your Journey for Free – Create Your Profile Today!</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-4xl lg:text-5xl font-extrabold">Free</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Create a detailed profile </span>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <div className='flex flex-col'>
                                        <span>Browse other profiles without pictures</span>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Receive unlimited match suggestions</span>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Access basic compatibility matches</span>
                                </li>
                            </ul>
                            <a href="/divine-dous/search" class="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-red-400 text-white">Get started</a>
                        </div>
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-red-400 shadow  xl:p-8 ">
                            <h3 class="mb-4 text-2xl font-semibold">Populer</h3>
                            <p class="font-light text-gray-600 sm:text-lg">Enhanced Connections Await – Upgrade to Our Medium Plan Today!</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-4xl lg:text-5xl font-extrabold">&#8377;200</span>
                                <span class="text-sky-600 text-base lg:text-2xl font-bold">/ 3month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>View full profiles with profile pictures</span>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <div className='flex flex-col'>
                                        <span>Access contact details for direct communication</span>
                                    </div>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Send and receive unlimited requests</span>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <div className='flex flex-col'>
                                        <span>Priority customer support for a seamless experience</span>
                                    </div>
                                </li>
                            </ul>
                            <a href="/divine-dous/search" class="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-red-400 text-white">Get started</a>
                        </div>

                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-red-400 shadow  xl:p-8 w-full">
                            <p class="font-light text-gray-600 sm:text-lg">Anticipate the Future of Dating – Prepare for an Unprecedented Experience with Our Upcoming Plan</p>
                            <div className='mr-2 text-4xl lg:text-5xl font-extrabold flex flex-col my-8'> <span>Up</span> Coming </div>
                            <ul role="list" class="mb-9 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Matchmaking Expert</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Top rated Handpicked Matches</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Quiker respones from Prospects</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <FaCheck className='text-red-400 text-xl' />
                                    <span>Personal Introduction</span>
                                </li>
                            </ul>
                            <a href="/divine-dous/search" class="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-400 text-white">Get started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
