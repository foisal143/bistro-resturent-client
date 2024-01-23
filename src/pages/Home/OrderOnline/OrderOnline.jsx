import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
const OrderOnline = () => {
  return (
    <section className="my-20">
      <SectionTitle
        heading="Order Online"
        subHeading="From 11:00am to 10:00pm"
      />
      <div className="my-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className=" lg:text-2xl text-shadow z-[10] text-center text-white  -mt-10 font-[Cinzel] font-bold">
              {' '}
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="lg:text-2xl text-shadow z-[10] text-center text-white  -mt-10 font-[Cinzel] font-bold">
              {' '}
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="lg:text-2xl text-shadow z-[10] text-center text-white  -mt-10 font-[Cinzel] font-bold">
              {' '}
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="lg:text-2xl text-shadow z-[10] text-center text-white  -mt-10 font-[Cinzel] font-bold">
              {' '}
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="lg:text-2xl text-shadow z-[10] text-center text-white  -mt-10 font-[Cinzel] font-bold">
              {' '}
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnline;
