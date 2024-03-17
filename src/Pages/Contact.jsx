import React from 'react'
import Section from '../components/Section'
import Heading from '../components/shared/Heading'
import Button from '../components/shared/Button'
import Testimonials from '../components/Testimonials'
import SingleTestimonial from '../components/shared/SingleTestimonial'
import { testimonialData } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards, Pagination } from 'swiper/modules'
import ContactCard from '../components/shared/Contact/ContactCard'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <Section
                 className={'pt-[8rem] md:pt-[10rem]  pb-32 -mt-[5.25rem]'}
                 crosses
                 crossesOffset="lg:translate-y-[5.25rem]"
                 customPaddings
                 id="services"
            >
                <Heading title={"Contact Us"} text={"Reach To code wave tech "} className={'flex text-center justify-center flex-col'}/>
                <div className='relative container justify-center gap-20 grid  md:grid-cols-2'>
                    <div className='relative swiper-container  w-auto'>
                        <div className='text-2xl font-bold'>Contact Details</div>
                        <div className='mt-10 grid gap-8'>
                            <div className='flex gap-4'>
                                <div className=' rounded-full h-10 w-10 bg-color-1/50 text-white flex items-center justify-center '>
                                    <FaPhone/> 
                                </div>
                                <div>

                               <label className='tagline'> Phone </label> 
                                <p className='caption'>9805116277 / 98000000</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className=' rounded-full h-10 w-10 bg-color-1/50 text-white flex items-center justify-center'>
                                    <MdEmail/> 
                                </div>
                                <div>

                               <label className='tagline'> Email </label> 
                                <p className='caption'>info@codewave.com.np</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className=' rounded-full h-10 w-10 bg-color-1/50 text-white flex items-center justify-center'>
                                    <FaAddressBook/> 
                                </div>
                                <div>

                               <label className='tagline'> Address </label> 
                                <p className='caption '>Banasthali, Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid caption  gap-4 w-full'>
                        <div className='flex  gap-8 '>
                            <input className='shadow-md border px-4 py-2 w-full focus:border-color-1 focus:outline-none focus:ring-color-1' type="text" placeholder='Full Name' />
                            <input className='shadow-md border  px-4 py-2 w-full focus:border-color-1 focus:outline-none focus:ring-color-1' type="email" placeholder='Email' />
                        </div>
                        <div className=' '>
                            <input className='shadow-md border w-full  px-4 py-2 focus:border-color-1 focus:outline-none focus:ring-color-1' type="text" placeholder='Subject' />
                        </div>
                        <div className=''>
                            <textarea className='shadow-md border w-full px-4 py-2 h-[200px] focus:border-color-1 focus:outline-none focus:ring-color-1' type="text" placeholder='Description' />
                        </div>
                        <div className='flex'>
                            <Button>Submit</Button>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    )
}

export default Contact