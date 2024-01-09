import MenuCard from '../MenuCard/MenuCard';

const MenuContainer = ({ items }) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map(menu => (
        <MenuCard key={menu._id} menu={menu}></MenuCard>
      ))}
    </div>
  );
};

export default MenuContainer;
