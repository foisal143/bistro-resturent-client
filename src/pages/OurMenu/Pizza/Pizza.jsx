import Cover from '../../sharedPages/Cover/Cover';
import MenuContainer from '../../../components/MenuContainer/MenuContainer';
import OrderButton from '../../../components/orderButton/OrderButton';
import pizzaImage from '../../../assets/menu/pizza-bg.jpg';
import useMenu from '../../../hooks/useMenu';
const Pizza = () => {
  const [menus] = useMenu();
  const pizza = menus.filter(item => item.category === 'pizza');
  return (
    <section className="my-12">
      <Cover
        img={pizzaImage}
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="PIZZA"
      ></Cover>

      <div className="px-5 lg:px-32">
        <MenuContainer items={pizza}></MenuContainer>
      </div>
      <OrderButton path="pizza"></OrderButton>
    </section>
  );
};

export default Pizza;
