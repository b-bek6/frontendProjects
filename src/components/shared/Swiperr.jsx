import {Pagination , Autoplay, Navigation, Parallax, EffectCoverflow} from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from '../../constants';
import Card from './Card';
import SwiperCore from 'swiper';
import { useRef } from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

export const Swiperr = () => {

  return (
    <div className=" relative shadow-sm md:shadow-none grid  md:border-none justify-center ">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={1}

      slidesPerView={2}
      centeredSlides={true}
      centerInsufficientSlides={true}
      initialSlide={3}
      
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows:false,
      }}

      breakpoints={{
        586:{
          slidesPerView:'auto',
          spaceBetween:100,
          coverflowEffect:{
            modifier:3
          }
        },
        1024: {
          slidesPerView: 3,
          spaceBetween:0,
          coverflowEffect:{
            modifier:3
          }
        },
      }}

      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.custom-swiper-right',
        prevEl: '.custom-swiper-left',
        clickable:true,
      }}
      modules={[EffectCoverflow, Pagination,Parallax, Navigation]}
      className="w-full"
    >
      <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 -z-1 mb-10">
                    {services.map((item) => (
                    <SwiperSlide>
                        <Card 
                          title={item.title}
                          iconUrl={item.iconUrl}
                          text={item.text}
                          id={item.id}
                          className={'h-100'}
                        />
                    </SwiperSlide>
                    ))}
                </div>
      {/* <div className="slider-controler mt-8 relative grid grid-flow-col gap-40 justify-center"> */}

       
      <div className="swiper-pagination w-auto">
        d
        </div>
        {/* 

        <div className=''>
        <div className='p-4 shadow-1  rounded-full  text-color-1 '><IoIosArrowForward/></div>
        </div> */}

      {/* </div> */}
    </Swiper>
    <div className='custom-swiper-left  absolute z-10 top-44 left-0 xl:-left-10'>
          <div className='p-4 shadow-1 bg-white  rounded-full  text-color-1 '><IoIosArrowBack/></div>
        </div>
        <div className="swiper-pagination -z-10 w-auto">
        </div>
        <div className='custom-swiper-right  absolute z-10 top-44 right-0 xl:-right-10'>
        <div className='p-4 shadow-1  rounded-full bg-white  text-color-1 '><IoIosArrowForward/></div>
        </div>
  </div>
  
  )
}
export default Swiperr
