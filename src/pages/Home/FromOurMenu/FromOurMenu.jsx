import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './FromOurMenu.css';
import img from '../../../assets/home/featured.jpg';
const FromOurMenu = () => {
  return (
    <section className="my-32 bg-fixed ourMenuBg relative  py-12">
      <div className="absolute flex justify-center items-center top-0 w-full h-full bg-black/50 ">
        <div className="w-full text-white">
          <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
          ></SectionTitle>
          <div className="mt-12 px-20 flex justify-between items-center gap-10">
            <img className="w-2/5 " src={img} alt="" />
            <div>
              <h3 className="font-[Cinzen] text-3xl text-gray-300">
                March 20, 2023 <br /> WHERE CAN I GET SOME?{' '}
              </h3>
              <p className="text-gray-300 font-[Inter]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn-coustom mt-5 text-white">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;
