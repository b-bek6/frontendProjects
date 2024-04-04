import React from 'react'
import Section from '../components/Section'
import Heading from '../components/shared/Heading'
import Testimonials from '../components/Testimonials'
import { MdScreenShare } from "react-icons/md";

const Portfolio = () => {
    return (
        <>


            <Section
                className={'pt-[12rem] pb-20 '}
                crosses
                crossesOffset={true}

            >
                <div className='grid grid-cols-5  justify-start items-center relative bg-n-8/10 container  h-[400px] w-full rounded-3xl'>
                    <div className='h1 col-span-3 text-color-2'>Discover Our Major Projects</div>
                </div>
            </Section>
            <Section
                className={''}
                crosses
                crossesOffset
            >
                <div className='relative container grid gap-20'>
                    <div className='grid grid-flow-col gap-8 justify-center items-center  grid-cols-2  '>
                        <div className='text-justify space-y-10 '>
                            <div className='h2 text-n-11'>Screening Solutions</div>
                            <p className='caption text-n-4'>At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality.</p>
                            <div className='space-y-5'>
                                <div className='h6'>Made Using</div>
                                <div className='flex flex-wrap gap-10'>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>React Js</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET Core MVC</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[500px] bg-n-8/10 rounded-2xl sahdow-lg p-12 flex flex-col justify-center items-center">
                            <MdScreenShare className='h-20 w-20 text-color-2 ' />
                        </div>
                    </div>
                    <div className='grid grid-flow-col gap-8 justify-center items-center  grid-cols-2  '>
                        <div className="w-full h-[500px] bg-n-8/10 rounded-2xl sahdow-lg p-12 flex flex-col justify-center items-center">
                            <MdScreenShare className='h-20 w-20 text-color-2 ' />
                        </div>
                        <div className='text-justify space-y-10 '>
                            <div className='h2 text-n-11'>Accounting System</div>
                            <p className='caption text-n-4'>At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality.</p>
                            <div className='space-y-5'>
                                <div className='h6'>Made Using</div>
                                <div className='flex flex-wrap gap-10'>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>React Js</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET Core MVC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-flow-col gap-8 justify-center items-center  grid-cols-2  '>
                        <div className='text-justify space-y-10 '>
                            <div className='h2 text-n-11'>College Management System</div>
                            <p className='caption text-n-4'>At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality.</p>
                            <div className='space-y-5'>
                                <div className='h6'>Made Using</div>
                                <div className='flex flex-wrap gap-10'>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>React Js</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET Core MVC</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[500px] bg-n-8/10 rounded-2xl sahdow-lg p-12 flex flex-col justify-center items-center">
                            <MdScreenShare className='h-20 w-20 text-color-2 ' />
                        </div>
                    </div>
                    <div className='grid grid-flow-col gap-8 justify-center items-center  grid-cols-2  '>
                        <div className="w-full h-[500px] bg-n-8/10 rounded-2xl sahdow-lg p-12 flex flex-col justify-center items-center">
                            <MdScreenShare className='h-20 w-20 text-color-2 ' />
                        </div>
                        <div className='text-justify space-y-10 '>
                            <div className='h2 text-n-11'>Video Kyc Solution</div>
                            <p className='caption text-n-4'>At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality.</p>
                            <div className='space-y-5'>
                                <div className='h6'>Made Using</div>
                                <div className='flex flex-wrap gap-10'>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>React Js</div>
                                    <div className='text-n-1 w-fit rounded-2xl p-2 bg-color-1/80'>ASP.NET Core MVC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
            <Testimonials />
        </>
    )
}

export default Portfolio