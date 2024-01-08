import FoodCard from '../../../components/FoodCard/FoodCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefREcomendate = () => {
  return (
    <section className="my-12">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </div>
    </section>
  );
};

export default ChefREcomendate;
