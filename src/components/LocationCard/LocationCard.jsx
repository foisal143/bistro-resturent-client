const LocationCard = ({ icon, title, info }) => {
  return (
    <div>
      <h4 className="w-full flex justify-center items-center h-12 bg-[#D1A054] text-white">
        {icon}
      </h4>
      <div className="w-10/12 font-[Cinzen] pt-5 text-center h-32 mx-auto bg-slate-100">
        <h3 className="text-xl font-semibold  uppercase">{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default LocationCard;
