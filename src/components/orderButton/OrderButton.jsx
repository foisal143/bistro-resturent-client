import { Link } from 'react-router-dom';

const OrderButton = ({ path }) => {
  return (
    <div className="text-center mt-10">
      <Link to={`/order/${path}`}>
        {' '}
        <button className="btn-coustom ">Ordered your favorite food</button>
      </Link>
    </div>
  );
};

export default OrderButton;
