import { Link } from 'react-router-dom';
import OrderFoodCard from '../../../components/OrderFoodCart/OrderFoodCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const ChefREcomendate = () => {
  const [menus] = useMenu();
  const salads = menus.filter(item => item.category === 'salad').slice(0, 3);
  return (
    <section className="my-12">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {salads.map(item => (
          <OrderFoodCard key={item._id} item={item} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/order/salad">
          <button className="btn-coustom">Visit More</button>
        </Link>
      </div>
    </section>
  );
};

export default ChefREcomendate;
