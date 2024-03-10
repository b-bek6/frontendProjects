import BottomLine from "../assets/HeroSvg/BottomLine"
import Section from "./Section"
import Card from "./shared/Card"
import Heading from "./shared/Heading"

const Services = () => {
  return (
    <Section
      className={'pt-[12rem] -mt-[5.25rem]'}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className="container relative">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Services"
          text="Discover our tailored solutions for your business needs."
        />

        <div className="flex justify-center flex-wrap gap-10 mb-10 pb-24">
          <Card />
        </div>
      </div>
    </Section>
  )
}

export default Services