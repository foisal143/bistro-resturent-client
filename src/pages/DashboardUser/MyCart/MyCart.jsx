import { FaTrash } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCarts from '../../../hooks/useCarts';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [carts, refetch] = useCarts();
  const total = carts && carts.reduce((prev, value) => prev + value.price, 0);

  const handlerDeleteCart = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="space-y-10 my-12 w-full">
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className="bg-white p-5 rounded-md lg:w-10/12 mx-auto w-full ">
        <div className="flex  mb-5 font-[Cinzen] gap-10 justify-evenly items-center font-semibold text-3xl">
          <h3>Total Orders: {carts.length}</h3>
          <h3>Total Price: ${total}</h3>
          <Link to="/dashboard/pay">
            {' '}
            <button className="px-3 py-2 rounded-md text-base text-white  bg-[#D1A054]">
              Pay
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table rounded-md">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054]  text-white font-[Inter] text-base">
                <th>#</th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td> ${item.price}</td>
                  <th>
                    <button
                      onClick={() => handlerDeleteCart(item._id)}
                      className="btn text-white btn-error"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
