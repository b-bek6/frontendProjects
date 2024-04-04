


const SingleTestimonial = ({ review }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 font-code font-bold text-black">
            {name}
          </h3>
          <p className="font-grotesk">{designation}</p>
        </div>
        <img width={60} height={50} src={image} alt={name} />
      </div>

      <p className="font-serif">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
