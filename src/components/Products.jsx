import React from 'react'
import Section from './Section'
import Heading from './shared/Heading'
import { Pagination, Autoplay, Navigation, Parallax } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiperr from './shared/Swiperr';
import Button from './shared/Button';
import { MdScreenShare } from "react-icons/md";
const Products = () => {
  return (
    <Section
      className={'pt-[12rem] bg-n-8/10 pb-20 '}
      crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="services"
    >
      <div className='relative container'>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Valuable"
          title="Our Products"
          text="Discover our tailored solutions for your business needs."
        />

        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}

          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
          slot="container-start"
          className="parallax-bg"
          // style={{
          //   'background-image':
          //     'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          // }}
          data-swiper-parallax="-23%"
        ></div>
          <SwiperSlide>
          <div className="w-full">
            <div className="w-full bg-n-1 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <div className=' relative bg-purple-200  rounded-full h-36 w-36'>
                          {/* <MdScreenShare /> */}
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-xl  font-bold mb-2">Screening Solution</p>
                    <p className="text-base text-gray-400 font-normal">Lorem ipsum  adipisicing elit. Qui quis ipsam nisi dolorem neque nobis, modi dolores laudantium consequatur facere! Repellendus, reiciendis!</p>
                </div>
            </div>



</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='  grid grid-flow-row align-middle items-center justify-center '>
              <div className='space-y-4 shadow-1 bg-n-1 rounded-xl grid  gap-8 py-20 px-8 '>

                <div className="h5  align-middle flex justify-center">Screening Solution</div>
                <div className='grid justify-center '>
                  <div className='p-4 rounded-lg bg-purple-200'>

                    <MdScreenShare />
                  </div>
                </div>
                <div className=' flex justify-center  align-middle text-center items-center'>

                  <div className='text-md text-n-7 '>Lorem ipsum  temporibus, sequi harum explicabo sapi voluptate a bit more</div>
                </div>
                <div className='flex justify-center'>
                  <button className='bg-purple-200 p-4 font-bold flex justify-center  rounded-lg'>View Product</button>
                </div>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='  grid grid-flow-row align-middle items-center justify-center '>
              <div className='space-y-4 shadow-1 bg-n-1 rounded-xl grid  gap-4 py-20 px-8 '>

                <div className="h5  align-middle flex justify-center">Screening Solution</div>
                <div className='grid justify-center '>
                  <div className='p-4 rounded-lg bg-purple-200'>

                    <MdScreenShare />
                  </div>
                </div>
                <div className=' flex justify-center  align-middle text-center items-center'>

                  <div className='text-md text-n-7 '>Lorem ipsum  temporibus, sequi harum explicabo sapi voluptate a bit more</div>
                </div>
                <div className='flex justify-center'>
                  <button className='bg-purple-200 p-4 font-bold flex justify-center  rounded-lg'>View Product</button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        </Swiper>

        {/* <Swiperr/> */}
      </div>
    </Section>
  )
}

export default Products