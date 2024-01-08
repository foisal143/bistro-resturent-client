import img from '../../assets/home/slide1.jpg';
const FoodCard = () => {
  return (
    <div className="card h-fit bg-base-100   shadow-xl">
      <img src={img} alt="Salads" className=" w-full h-72" />

      <div className="card-body items-center text-center">
        <h2 className="card-title font-[Inter] text-xl">Caeser Salad</h2>
        <p className="font-[Inter]">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="card-actions">
          <button className=" btn-coustom">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
