import Bannar from '../Bannar/Bannar';
import BestroBoss from '../BestroBoss/BestroBoss';
import ChefREcomendate from '../ChefRecomendate/ChefREcomendate';
import Contact from '../Contact/Contact';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Menu from '../Menu/Menu';
import OrderOnline from '../OrderOnline/OrderOnline';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <div className="lg:px-32 px-5">
        <OrderOnline></OrderOnline>
        <BestroBoss></BestroBoss>
        <Menu></Menu>
        <Contact></Contact>
        <ChefREcomendate></ChefREcomendate>
      </div>
      <FromOurMenu></FromOurMenu>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
