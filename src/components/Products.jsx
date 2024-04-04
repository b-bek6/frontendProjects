import React, { useRef, useState } from 'react'
import Section from './Section'
import Heading from './shared/Heading'
import { Pagination, Autoplay, Navigation, Parallax } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdScreenShare } from "react-icons/md";
import {  IoMdVideocam } from 'react-icons/io';
import { MdAccountBalance } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";


const Products = () => {


  return (
    <Section
      className={'pt-[5rem] pb-[12rem] -mt-[5.25rem] bg-n-8/10 '}
      crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className='relative text-center justify-center container'>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Valuable"
          title="Our Products"
          text="Discover our tailored solutions for your business needs."
        />
        <div className=' flex gap-8'>

          <Swiper
            effect={'slide'}
            grabCursor={false}
            style={{ "--swiper-navigation-color": "dark", }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              // el:".swiper-pagination",
              type:'fraction',
              // bulletActiveClass:".swiper-custom-bullet-active",
              // bulletClass:".swiper-custom-bullet",
              clickable:true
            }}
            breakpoints={{
              786:{
                slidesPerView:2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}

            navigation={{clickable:true}}
            modules={[Pagination, Navigation]}
            className=''
          >




            <SwiperSlide>
              <div className="w-full h-full bg-n-1 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <p className="text-xl body-1 mb-8">Screening Solution</p>
                <div className="mb-8">
                  <div className=' relative flex justify-center items-center  rounded-full h-20 w-20'>
                    <MdScreenShare className='h-20 w-20 text-color-2 ' />
                  </div>
                </div>
                <div className="text-center">
                  <p className="caption">Lorem ipsum  adipisicing elit. Qui quis ipsam nisi dolorem neque nobis, modi dolores laudantium consequatur facere! Repellendus, reiciendis!</p>
                </div>
                <div className='w-full text-left flex  justify-center mt-10'>
                  <div className='p-4 py-3 hover:bg-color-1 bg-color-1/10 transition delay-150  rounded-xl button w-fit'>Explore More</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="w-full h-full bg-n-1 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <p className="text-xl body-1 mb-8">Accounting System</p>
                <div className="mb-8">
                  <div className=' relative flex justify-center items-center  rounded-full h-20 w-20'>
                    <MdAccountBalance className='h-20 w-20 text-color-2 ' />
                  </div>
                </div>
                <div className="text-center">
                  <p className="caption">Lorem ipsum  adipisicing elit. Qui quis ipsam nisi dolorem neque nobis, modi dolores laudantium consequatur facere! Repellendus, reiciendis!</p>
                </div>
                <div className='w-full text-left flex  justify-center mt-10'>
                  <div className='p-4 py-3 hover:bg-color-1 bg-color-1/10 transition delay-150  rounded-xl button w-fit'>Explore More</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="w-full h-full bg-n-1 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <p className="text-xl body-1 mb-8">College Management System</p>
                <div className="mb-8">
                  <div className=' relative flex justify-center items-center  rounded-full h-20 w-20'>
                    <IoSchoolSharp className='h-20 w-20 text-color-2 ' />
                  </div>
                </div>
                <div className="text-center">
                  <p className="caption">Lorem ipsum  adipisicing elit. Qui quis ipsam nisi dolorem neque nobis, modi dolores laudantium consequatur facere! Repellendus, reiciendis!</p>
                </div>
                <div className='w-full text-left flex  justify-center mt-10'>
                  <div className='p-4 py-3 hover:bg-color-1 bg-color-1/10 transition delay-150  rounded-xl button w-fit'>Explore More</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-full bg-n-1 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <p className="text-xl body-1 mb-8">Video Kyc Solution</p>
                <div className="mb-8">
                  <div className=' relative flex justify-center items-center  rounded-full h-20 w-20'>
                    <IoMdVideocam className='h-20 w-20 text-color-2 ' />
                  </div>
                </div>
                <div className="text-center">
                  <p className="caption">Lorem ipsum  adipisicing elit. Qui quis ipsam nisi dolorem neque nobis, modi dolores laudantium consequatur facere! Repellendus, reiciendis!</p>
                </div>
                <div className='w-full text-left flex  justify-center mt-10'>
                  <div className='p-4 py-3 hover:bg-color-1 bg-color-1/10 transition delay-150  rounded-xl button w-fit'>Explore More</div>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>

      </div>
    </Section>
  )
}

export default Products