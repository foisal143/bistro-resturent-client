import Cover from '../../sharedPages/Cover/Cover';
import MenuContainer from '../../../components/MenuContainer/MenuContainer';
import OrderButton from '../../../components/orderButton/OrderButton';
import useMenu from '../../../hooks/useMenu';
import soupImage from '../../../assets/menu/soup-bg.jpg';
const Soup = () => {
  const [menus] = useMenu();
  const soup = menus.filter(item => item.category === 'soup');
  return (
    <section className="my-12">
      <Cover
        img={soupImage}
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="SALADS"
      ></Cover>

      <div className="px-5 lg:px-32">
        <MenuContainer items={soup}></MenuContainer>
      </div>
      <OrderButton path="salad"></OrderButton>
    </section>
  );
};

export default Soup;
