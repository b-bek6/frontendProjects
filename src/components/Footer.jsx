import React from 'react'
import Section from './Section'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants/index'
import BottomLine from '../assets/HeroSvg/BottomLine'

const Footer = () => {
    return (
        // <Section
        //     className={'pt-[5rem] bg-purple-600 '}
        //     crosses
        //     // crossesOffset="lg:translate-y-[5.25rem]"
        //     customPaddings
        //     id="footer"
        // >
        <div className=' bg-black relative text-n-1'>
            <div className='container'>
                <footer className=" pb-14">
                    <div className="flex w-full flex-col gap-10">
                        <div className="flex mt-10 flex-col items-start justify-center gap-[10%] md:flex-row">
                            <a href="/" className="mb-10 text-color-1 font-extrabold h5">
                                Code Wave
                            </a>

                            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                                {FOOTER_LINKS.map((columns) => (
                                    <FooterColumn title={columns.title}>
                                        <ul className="flex flex-col gap-4 text-gray-30">
                                            {columns.links.map((link) => (
                                                <a href="/" key={link}>
                                                    {link}
                                                </a>
                                            ))}
                                        </ul>
                                    </FooterColumn>
                                ))}

                                <div className="flex flex-col gap-5">
                                    <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                        {FOOTER_CONTACT_INFO.links.map((link) => (
                                            <a
                                                href="/"
                                                key={link.label}
                                                className="flex gap-4 md:flex-col lg:flex-row"
                                            >
                                                {/* <p className="whitespace-nowrap">
                                                    {link.label}:
                                                </p> */}
                                                <p className="medium-14 whitespace-nowrap text-blue-70">
                                                    {link.value}
                                                </p>
                                            </a>
                                        ))}
                                    </FooterColumn>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <FooterColumn title={SOCIALS.title}>
                                        <ul className=" flex gap-4 text-n-1">
                                            {SOCIALS.links.map((link) => (
                                                <a href="/" key={link}>
                                                    <img src={link} alt="logo" width={24} height={24} />
                                                </a>
                                            ))}
                                        </ul>
                                    </FooterColumn>
                                </div>
                            </div>
                        </div>
                        <div className="border border-n-5 " />
                        <p className="body-2 mt-4 text-n-4">2023 Code Wave | All rights reserved</p>
                    </div>
                </footer>
            </div>
            </div>

        // </Section>
       
    )
}


const FooterColumn = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="h5 font-extralight whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}


export default Footer