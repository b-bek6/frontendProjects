import React from 'react'

const ContactCard = ({ review }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-slate-500 p-9 pt-7.5 border shadow-solid-9 ">
      <p className='h-[400px] '>{content}</p>
    <div className="mb-7.5 flex justify-between  pb-6 ">
      <div>
        <h3 className="mb-1.5   text-black ">
          {name}
        </h3>
      </div>
      <img width={60} height={50} className=" rounded-full" src={image} alt={name} />
    </div>

    
  </div>
  )
}

export default ContactCard