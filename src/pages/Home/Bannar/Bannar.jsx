import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannar1 from '../../../assets/home/01.jpg';
import bannar2 from '../../../assets/home/02.jpg';
import bannar3 from '../../../assets/home/03.png';
import bannar4 from '../../../assets/home/04.jpg';
import bannar5 from '../../../assets/home/05.png';
import bannar6 from '../../../assets/home/06.png';
const Bannar = () => {
  return (
    <div className="flex overflow-hidden justify-center items-center gap-5">
      <Carousel>
        <div>
          <img className="w-full h-full" src={bannar1} />
        </div>
        <div>
          <img className="w-full h-full" src={bannar2} />
        </div>
        <div>
          <img className="w-full h-full" src={bannar3} />
        </div>
        <div>
          <img className="w-full h-full" src={bannar4} />
        </div>
        <div>
          <img className="w-full h-full" src={bannar5} />
        </div>
        <div>
          <img className="w-full h-full" src={bannar6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Bannar;
