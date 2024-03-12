import React from 'react'

const Card = ({ iconUrl, title, text, id }) => {
    return (
        <div>
            <div
                className='block relative bg-white shadow-2 min-w-[20rem] rounded-[16px]'
                key={id}
            >
                <div className="relative z-2 grid grid-flow-row justify-center grid-rows-7  h-[25rem] p-[2.4rem] pointer-events-none">
                    <div className=' row-span-2 grid justify-center'>
                        <img src={iconUrl} height={70} width={70} alt={title} />
                    </div>
                    <div className='row-span-3'>
                        <hr />
                        <h5 className="h5 text-center mt-5 mb-5">{title}</h5>
                        <p className="body-2 mb-6 text-n-3">{text}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card