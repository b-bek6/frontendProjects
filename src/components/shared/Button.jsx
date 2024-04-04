// import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `relative button relative inline-flex items-center justify-center h-11 transiotion-colors hover:text-color-3 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
    const spanClasses = 'relative z-10'

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {/* {ButtonSvg(white)} */}
            <div className="absolute rounded-md h-full w-full top-0 left-0 bottom-0 bg-color-2"></div>
        </button>
    )

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {/* {ButtonSvg(white)} */}
        </a>
    )
  return href ? renderLink() : renderButton();
}

export default Button