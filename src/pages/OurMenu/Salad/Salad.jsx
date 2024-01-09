import MenuContainer from '../../../components/MenuContainer/MenuContainer';
import OrderButton from '../../../components/orderButton/OrderButton';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../sharedPages/Cover/Cover';
import saladImage from '../../../assets/menu/salad-bg.jpg';

const Salad = () => {
  const [menus] = useMenu();
  const pizza = menus.filter(item => item.category === 'salad');
  return (
    <section className="my-12">
      <Cover
        img={saladImage}
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="SALADS"
      ></Cover>

      <div className="px-5 lg:px-32">
        <MenuContainer items={pizza}></MenuContainer>
      </div>
      <OrderButton path="salad"></OrderButton>
    </section>
  );
};

export default Salad;
