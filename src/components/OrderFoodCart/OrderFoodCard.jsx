import React from 'react';

const OrderFoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card h-[541px] bg-slate-100   shadow-xl">
      <img src={image} alt="Salads" className=" w-full h-72" />
      <p className="absolute bg-black text-white p-2 top-5 right-5">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-[Inter] text-xl">{name}</h2>
        <p className="font-[Inter]">{recipe}</p>
        <div className="card-actions">
          <button className=" btn-coustom">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
