import React from 'react'
import Section from './Section'
import Heading from './shared/Heading'
import WebDev from '../assets/HeroSvg/WebDev'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import ClaimBackground from '../assets/background/ClaimBackground'

const Claim = () => {
    return (

        <Section
            className={'py-[12rem] relative overflow-hidden  bg-color-1/10 -mt-[5.25rem]'}
            crosses
            // crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="claim"
        >
            <div className='container relative'>
                <ScrollParallax isAbsolutelyPositioned strength={0.1}>
                    <div className='absolute z-10 -top-56 left-0  right-0 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-0' id="Capa_1" x="0" y="0" version="1.1" viewBox="0 0 499.772 499.772" width="200" height="200"><path d="M492.692 223.646 394.345 52.979a53.123 53.123 0 0 0-46.08-26.667H151.572a53.12 53.12 0 0 0-46.08 26.027L7.145 223.006a53.333 53.333 0 0 0 0 53.333l98.347 170.667a53.332 53.332 0 0 0 46.08 26.453h196.693a53.334 53.334 0 0 0 46.08-25.813l98.347-170.667a53.76 53.76 0 0 0 0-53.333z" fill="url(&quot;#SvgjsLinearGradient1064&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1064"><stop stop-color="#a8edea" offset="0"></stop><stop stop-color="#fed6e3" offset="1"></stop></linearGradient></defs></svg>
                    </div>
                    <div className='absolute z-10 -bottom-10   right-52 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-0' id="Capa_1" x="0" y="0" version="1.1" viewBox="0 0 499.772 499.772" width="200" height="200"><path d="M492.692 223.646 394.345 52.979a53.123 53.123 0 0 0-46.08-26.667H151.572a53.12 53.12 0 0 0-46.08 26.027L7.145 223.006a53.333 53.333 0 0 0 0 53.333l98.347 170.667a53.332 53.332 0 0 0 46.08 26.453h196.693a53.334 53.334 0 0 0 46.08-25.813l98.347-170.667a53.76 53.76 0 0 0 0-53.333z" fill="url(&quot;#SvgjsLinearGradient1064&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1064"><stop stop-color="#a8edea" offset="0"></stop><stop stop-color="#fed6e3" offset="1"></stop></linearGradient></defs></svg>
                    </div>
                </ScrollParallax>

                <div className='relative flex justify-center align-middle '>
                    <div className='space-y-4'>
                        <div className="h2 font-extrabold text-color-2">Empowering Your Digital Future</div>
                        <div className="  text-n-4">At Code Wave Tech, we're dedicated to transforming your digital aspirations into reality. With cutting-edge technology solutions and personalized strategies, we empower businesses to thrive in the ever-evolving digital landscape. From custom software development to strategic consulting, we're here to guide you on your journey to success.</div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Claim