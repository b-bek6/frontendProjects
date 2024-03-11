import { motion } from "framer-motion";

const SingleBrand = ({ brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <img
          className=" aspect-square transition-all duration-300 hidden"
          src={image}
          alt={name}
          width={100}
          fill
        />
        <img
          className=" aspect-square transition-all duration-300  "
          src={imageLight}
          alt={name}
          width={100}
          fill
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
