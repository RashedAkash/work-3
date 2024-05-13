

const SectionTitle = ({title1,title2}) => {
  return (
    <div>
      <h1 className="secondary-color tiny:text-[24px] sm:text-[24px]   font-semibold md:text-[40px] lg:text-[51px] xl:text-[56px] 2xl:text-[56px] 3xl:text-[56px]">
        {title1} <span className="text-[#A274FF]">{title2}</span>.
      </h1>
    </div>
  );
};

export default SectionTitle;