import React from 'react'
import Section from '../components/Section'

const About = () => {
    return (
        <>
            <Section
                className={'pt-[12rem]  pb-32 -mt-[5.25rem]'}
                crosses
                crossesOffset="lg:translate-y-[5.25rem]"
                customPaddings
                id="about"
            >
                <div className='relative container'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='space-y-10 text-justify'>
                            <div className='h5'> Who We Are ? </div>
                            <p className='text-md text-n-4'>
                                Welcome to Code Wave Tech, where innovation meets expertise. Founded with a vision to revolutionize the digital landscape, we are a dynamic team of tech enthusiasts dedicated to delivering cutting-edge software solutions and systems for our valued clients.
                                With a rich blend of experience and innovation, we specialize in crafting bespoke software solutions that address the unique challenges and opportunities faced by businesses across industries. From intuitive mobile applications to robust enterprise systems, our solutions are designed to empower our clients to stay ahead in today's fast-paced and ever-evolving market.
                                At Code Wave Tech, we believe in the power of <br /> collaboration and partnership. We work closely with our clients, taking the time to understand their goals, objectives, and pain points. This collaborative approach enables us to develop tailored solutions that not only meet but exceed expectations.
                                Our team comprises seasoned professionals with diverse expertise, including software engineers, UX/UI designers, project managers, and quality assurance specialists. Together, we bring a wealth of knowledge and creativity to every project, ensuring that each solution we deliver is of the highest quality and meets the unique needs of our clients.
                                But our commitment to excellence goes beyond just delivering great software. We believe in building lasting relationships with our clients, based on trust, transparency, and mutual respect. Our dedication to client satisfaction is evident in everything we do, from our attention to detail in the development process to our ongoing support and maintenance services.
                                Whether you're a startup with a disruptive idea or an established enterprise looking to innovate, we're here to help you turn your vision into reality. Join us on the journey to digital transformation and discover the endless possibilities that technology can offer.
                                Get in touch with us today to learn <br /> more about how we can help your business thrive in the digital age.
                            </p>
                        </div>
                        <div className='bg-n-8/10 rounded-3xl'>
                            <div className='space-y-10 p-4 text-justify'>
                                <div className='h5'>
                                    From Our Founder
                                    <div className='h6'> - Sagar Khadka</div>
                                </div>
                                <p className='text-md font-semibold font-grotesk text-n-4'>
                                    Welcome to Code Wave Tech, where innovation meets expertise. Founded with a vision to revolutionize the digital landscape, we are a dynamic team of tech enthusiasts dedicated to delivering cutting-edge software solutions and systems for our valued clients.
                                    With a rich blend of experience and innovation, we specialize in crafting bespoke software solutions that address the unique challenges and opportunities faced by businesses across industries. From intuitive mobile applications to robust enterprise systems, our solutions are designed to empower our clients to stay ahead in today's fast-paced and ever-evolving market.
                                    At Code Wave Tech, we believe in the power of collaboration and partnership. We work closely with our clients, taking the time to understand their goals, objectives, and pain points. This collaborative approach enables us to develop tailored solutions that not only meet but exceed expectations.
                                    Our team comprises seasoned professionals with diverse expertise, including software engineers, UX/UI designers, project managers, and quality assurance specialists. Together, we bring a wealth of knowledge and creativity to every project, ensuring that each solution we deliver is of the highest quality and meets the unique needs of our clients.
                                    But our commitment to excellence goes beyond just delivering great software. We believe in building lasting relationships with our clients, based on trust, transparency, and mutual respect. Our dedication to client satisfaction is evident in everything we do, from our attention to detail in the development process to our ongoing support and maintenance services.
                                    Whether you're a startup with a disruptive idea or an established enterprise looking to innovate, we're here to help you turn your vision into reality. Join us on the journey to digital transformation and discover the endless possibilities that technology can offer.
                                    Get in touch with us today to learn more about how we can help your business thrive in the digital age.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Section>
        </>
    )
}

export default About