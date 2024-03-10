import PlusSvg from "../svg/PlusSvg"

const BottomLine = () => {
  return (
    <>
        <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25  blur-[1px] bg-purple-200 pointer-events-none xl:block" />
  
        <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
  
        <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
      </>
  )
}

export default BottomLine