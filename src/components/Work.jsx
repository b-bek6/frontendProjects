import React from 'react'
import { services, WorkingProcess } from "../constants"
import Section from './Section'
import Heading from './shared/Heading'
import Card from './shared/Card'

const Work = () => {

  return (
    <>
    <Section
      className={'pt-[12rem] pb-[20rem] -mt-[5.25rem]'}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className="container relative">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Building Process"
          title="How We Work"
          text="Discover our tailored solutions for your business needs."
        />
        <div className='grid justify-center grid-cols-1 md:grid-cols-3 gap-10'>

       
    {
      WorkingProcess.map((item)=>(
        <div className='space-y-4'>
          
          <div className='relative bg-n-4 w-fit rounded-full' >
            <div className="absolute text-white  -top-2 left-0 font-extrabold z-1 ">{Number(item.id) + 1}
            </div>
            <div className='absolute  rounded-full text-[15px] -top-2 p-3 -left-2 bg-n-4 '></div>
            <img src={item.iconUrl}  height={10} width={50}/>
            </div>
          <div className='h6'>{item.title}</div>
          <div>{item.text}</div>
        </div>
      ))
    }
     </div>
    </div>
    </Section>
    </>

  )
}

export default Work