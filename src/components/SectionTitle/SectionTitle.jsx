const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center font-[Inter]">
      <h4 className="text-[#D99904] pb-3">--- {subHeading} ---</h4>
      <h3 className="text-4xl font-semibold border-y-2 w-1/2  md:w-3/12 py-3 mx-auto">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
