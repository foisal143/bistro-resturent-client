import Cover from '../../sharedPages/Cover/Cover';
import dessartImage from '../../../assets/menu/dessert-bg.jpeg';
import MenuContainer from '../../../components/MenuContainer/MenuContainer';
import useMenu from '../../../hooks/useMenu';
import OrderButton from '../../../components/orderButton/OrderButton';

const Dessart = () => {
  const [menus] = useMenu();
  const dessart = menus.filter(item => item.category === 'dessert');
  return (
    <section className="my-12">
      <Cover
        img={dessartImage}
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="DESSERTS"
      ></Cover>

      <div className="px-5 lg:px-32">
        <MenuContainer items={dessart}></MenuContainer>
      </div>
      <OrderButton path="dessert"></OrderButton>
    </section>
  );
};

export default Dessart;
