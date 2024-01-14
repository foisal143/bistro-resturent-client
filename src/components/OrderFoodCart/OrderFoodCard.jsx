import { useContext } from 'react';
import { AuthContext } from '../../AuthPorvaider/AuthProvaider';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
const OrderFoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [carts, refetch] = useCarts();
  const { _id, image, name, price, recipe } = item;
  const naviate = useNavigate();
  const location = useLocation();

  const handlerAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: 'You can not add this?',
        text: 'You should login first!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!',
      }).then(result => {
        if (result.isConfirmed) {
          naviate('/login', { state: location });
        }
      });
      return;
    }
    const cartInfo = {
      cartId: _id,
      image,
      name,
      price,
      email: user?.email,
    };
    fetch('http://localhost:5000/carts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          refetch();
          Swal.fire({
            title: 'Success?',
            text: 'Product Added Success?',
            icon: 'success',
          });
        }
      });
  };
  return (
    <div className="card h-[541px] bg-slate-100   shadow-xl">
      <img src={image} alt="Salads" className=" w-full h-72" />
      <p className="absolute bg-black text-white p-2 top-5 right-5">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-[Inter] text-xl">{name}</h2>
        <p className="font-[Inter]">{recipe}</p>
        <div className="card-actions">
          <button onClick={handlerAddToCart} className=" btn-coustom">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
