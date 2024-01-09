import coverImage from '../../../assets/menu/banner3.jpg';
import Cover from '../../sharedPages/Cover/Cover';
import Dessart from '../Dessart/Dessart';
import Pizza from '../Pizza/Pizza';
import Salad from '../Salad/Salad';
import Soup from '../Soup/Soup';
import TodaysOffer from '../TodysOffer/TodaysOffer';

const OurMenu = () => {
  return (
    <div>
      <Cover
        img={coverImage}
        details="Would you like to try a dish?"
        title="our menu"
      ></Cover>
      <TodaysOffer></TodaysOffer>
      <Dessart></Dessart>
      <Pizza></Pizza>
      <Salad></Salad>
      <Soup></Soup>
    </div>
  );
};

export default OurMenu;
