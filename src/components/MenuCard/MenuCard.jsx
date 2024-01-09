// eslint-disable-next-line react/prop-types
const MenuCard = ({ menu }) => {
  const { image, name, price, recipe } = menu;
  return (
    <div className="flex justify-between  gap-5">
      <img
        className="w-20 h-20 rounded-r-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold font-[Cinzen]">{name} ----------</h3>
        <p className="font-[Inter]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuCard;
