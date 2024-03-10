import React from 'react'
import { services } from '../../constants'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'


const Card = () => {
    return (
        <>
            <div className="container relative z-2">
                <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
                    {services.map((item) => (
                        <div
                            className='block relative bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-w-[20rem] rounded-[16px]'
                            key={item.id}
                        >
                            <div className="relative z-2 grid grid-flow-row justify-center grid-rows-7  h-[25rem] p-[2.4rem] pointer-events-none">
                                <div className=' row-span-2 grid justify-center'>
                                    <img src={item.iconUrl} height={70} width={70} alt={item.title} />
                                </div>
                                <div className='row-span-3'>
                                    <hr/>
                                    <h5 className="h5 text-center mt-5 mb-5">{item.title}</h5>
                                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Card