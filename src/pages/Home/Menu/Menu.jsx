import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCard from '../../../components/MenuCard/MenuCard';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const Menu = () => {
  // const [menus, setMenus] = useState([]);
  const [menus] = useMenu();
  const popularMenu = menus.filter(data => data.category === 'popular');

  return (
    <section className="my-12 px-5">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularMenu.map(menu => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/our-menu">
          <button className="btn-coustom">view full menu</button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
