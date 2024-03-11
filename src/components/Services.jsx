import BottomLine from "../assets/HeroSvg/BottomLine"
import { services } from "../constants"
import Section from "./Section"
import Card from "./shared/Card"
import Heading from "./shared/Heading"
import Swiperr from "./shared/Swiperr"


const Services = () => {
  return (
    <Section
      className={'pt-[12rem] pb-20 -mt-[5.25rem]'}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className="container relative">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Happy To Help"
          title="Our Services"
          text="Discover our tailored solutions for your business needs."
        />
        <div className=" mb-20 ">
        {/* <div className="flex justify-center flex-wrap gap-10 mb-10 "> */}
        {/* <div className="container relative z-2">
                <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
                    {services.map((item) => (
                        <Card 
                          title={item.title}
                          iconUrl={item.iconUrl}
                          text={item.text}
                          id={item.id}
                        />
                    ))}
                </div>
            </div> */}
            <Swiperr/>
        </div>
      </div>
    </Section>
  )
}

export default Services