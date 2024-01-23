const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center font-[Inter]">
      <h4 className="text-[#D99904] pb-3">--- {subHeading} ---</h4>
      <h3 className="text-xl lg:text-4xl uppercase font-semibold border-y-2 w-1/2  md:min-w-3/12 py-3 mx-auto">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
