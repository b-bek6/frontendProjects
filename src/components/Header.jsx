import { useState } from "react"
import { navigation } from "../constants"
import Button from "./shared/Button"
import HamBurger from "./shared/HamBurger"
const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false)


  return (
    <div className={` shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] fixed top-0 left-0 z-50 w-full bg-n-1 lg:backdrop-blur-sm `}>
        <div className="flex items-center justify-between  px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className='block w-[14rem] xl:mr-8' href='#hero'>
                <span className='text-2xl font-extrabold'>Code Wave Tech</span>
            </a>

            <nav className={`hidden  fixed top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navigation.map((item)=>(
                        <a href={item.url} key={item.id} className={` block relative font-code text-2xl  uppercase text-n-8 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden':""} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5  xl:px-10`}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>

            <a href="#contact" className='button hidden mr-8  text-n-1/50 transition-colors hover:text-n-1 lg:block'>
               <Button className="ml-auto" >Get in Touch</Button>
            </a>
            <HamBurger navigationOpen={navigationOpen} setNavigationOpen={setNavigationOpen}/>
            
        </div>
            <nav className={`fixed shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  h-screen lg:hidden bg-n-1 transition ease-in-out delay-150 right-0 top-0 ${navigationOpen?"":"translate-x-[250px]"}`}>
            <div className={` relative grid p-10 z-10 shadow-sm mx-10 grid-flow-row  transition ease-in-out delay-150 ${navigationOpen?"":"translate-x-10"}`}>
                    {navigation.map((item)=>(
                        <a href={item.url} key={item.id} className={`  font-code text-md font-bold my-10 mx-0 uppercase text-n-8 transition-colors hover:text-color-1`}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>
    </div>
  )
}

export default Header