import React from 'react'
import Section from '../../components/Section'
import { motion } from 'framer-motion'
import WebServiceSvg from '../../assets/ServicePage/WebServiceSvg'
import Heading from '../../components/shared/Heading'
import Testimonials from '../../components/Testimonials'
import { MouseParallax } from 'react-just-parallax'
import TechStack from '../../components/Services/TechStack'
import animationData from '../../assets/lottieFiles/MobileService.json'
import Lottie from 'react-lottie'

const MobileService = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <>
            <Section
                className={'pt-[12rem] pb-20 -mt-[5.25rem]'}
                crosses
                crossesOffset="lg:translate-y-[5.25rem]"
                customPaddings
                id="MobileService"
            >
                <div className='container mx-auto max-h-[86.875rem] px-4 md:px-8 2xl:px-0 relative'>
                    <div className='lg:flex justify-center items-center '>
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
                            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
                        >
                            <div>
                                <div className='h1'>
                                    Moblie App Development
                                </div>
                                <div className='quote mt-10 text-left'>
                                    At Code Wave Tech, we provide all the services from business requirement study, interface design to convert the solutions to digital, portable platforms through android and iOS apps with the aim of expanding further by creating other possible business potentials. We mostly use React Native to build mobile applications with latest technologies maintaining the maximum quality.
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <div className='grid justify-center z-10 '>
                                <div className='h1 w-[400px] xl:w-[600px]'>
                                    <Lottie
                                        options={defaultOptions}
                                        height={400}
                                        width={400}
                                    />
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            <Section
                className={'py-[12rem]  bg-n-8/10'}
                crosses
                // crossesOffset="lg:translate-y-[5.25rem]"
                customPaddings
                id="services"
            >
                <div className='relative container '>
                    <div className='grid gap-10 uppercase justify-center md:justify-between md:grid-flow-col'>
                        <div className=' flex flex-col justify-around items-center '>
                            <div className='h1  '> 10+ </div>
                            <div className='h3'>projects</div>
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <div className='h1  '> 4+ </div>
                            <div className='h3'>Clients</div>
                        </div>
                        <div className=' flex flex-col justify-center items-center '>
                            <div className='h1  '> 10+ </div>
                            <div className='h3'>Experts</div>
                        </div>
                    </div>
                    <MouseParallax isAbsolutelyPositioned>

                        <div className='absolute -z-1 top-10 opacity-10 right-0 w-96 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512 512" width="200" height="200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516a30.03 30.03 0 0 0 19.785-7.43c20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0" fill="url(&quot;#SvgjsLinearGradient1558&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1558"><stop stop-opacity=" 1" stop-color="rgba(234, 105, 209)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(234, 204, 248)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(234, 105, 170)" offset="0.443515625"></stop><stop stop-opacity=" 1" stop-color="rgba(241, 84, 84)" offset="1"></stop></linearGradient></defs></svg>
                        </div>
                    </MouseParallax>
                </div>
            </Section>
            <Section
                className={'pt-[2rem] '}
                crosses
                id="services"
            >
                <Heading title={"Technology We Use"} tag={"Tech Stack"} />
                <TechStack />
            </Section>
            <Section
                className={' pt-[2rem] '}
                crosses
                id="services"
            >
                <Testimonials />
            </Section>
        </>
    )
}

export default MobileService