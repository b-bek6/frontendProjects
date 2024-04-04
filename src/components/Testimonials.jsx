import React from 'react'
import Heading from './shared/Heading'
import { motion } from 'framer-motion'
import { Pagination, Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from './shared/SingleTestimonial';
import { testimonialData } from '../constants';

const Testimonials = () => {
  return (

    <div className="container relative">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            tag="important"
            title="Testimonials"
            text="What our client has to say about us"
          />
        </div>
      </div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials