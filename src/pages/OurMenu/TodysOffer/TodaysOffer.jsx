import { Link } from 'react-router-dom';
import MenuCard from '../../../components/MenuCard/MenuCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuContainer from '../../../components/MenuContainer/MenuContainer';
import OrderButton from '../../../components/orderButton/OrderButton';

const TodaysOffer = () => {
  const [menus] = useMenu();
  const offerMenu = menus.filter(item => item.category === 'offered');
  return (
    <section className="mt-24 px-5 lg:px-32">
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuContainer items={offerMenu}></MenuContainer>
      <OrderButton path="salad"></OrderButton>
    </section>
  );
};

export default TodaysOffer;
