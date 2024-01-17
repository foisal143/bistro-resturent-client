import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosWithAuth from '../../../hooks/axiosSciure';

const ManageItems = () => {
  const [menus, refetch] = useMenu();
  const axiosSciure = useAxiosWithAuth();
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
        axiosSciure
          .delete(`/menus/${id}`)

          .then(data => {
            if (data.data.deletedCount > 0) {
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
    <section className="pt-12 w-full">
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up!"
      ></SectionTitle>

      <div className="bg-white p-5 mt-12 rounded-md lg:w-10/12 mx-auto w-full ">
        <div className=" mb-5 font-[Cinzen]  font-semibold text-3xl">
          <h3>Total Menu: {menus.length}</h3>
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
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((item, i) => (
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
                  <td className="flex justify-center gap-5">
                    <Link to={`update-item/${item._id}`}>
                      <button className="btn text-white hover:text-black bg-[#D1A054] btn-ghost">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handlerDeleteCart(item._id)}
                      className="btn text-white btn-error"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
