import {Pagination , Autoplay, Navigation, Parallax, EffectCoverflow} from 'swiper/modules'
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from '../../constants';
import Card from './Card';
import SwiperCore from 'swiper';
import { useRef } from 'react';

export const Swiperr = () => {

  return (
    <div className="">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'3'}
      spaceBetween={100}
      initialSlide={0}

      
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows:false,
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
      <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
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
      <div className="slider-controler mt-8 relative grid grid-flow-col gap-40 justify-center">

        <div className='custom-swiper-left'>
          <div className='p-4  hover:bg-black rounded-full bg-color-1'></div>
        </div>

        <div className="swiper-pagination -z-10 w-auto">
        </div>

        <div className='custom-swiper-right'>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
<span class="sr-only">Icon description</span>
</button>
        </div>

      </div>
    </Swiper>
  </div>
  )
}
export default Swiperr
