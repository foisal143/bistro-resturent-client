import { FaTrash, FaUser } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useUsers from '../../../hooks/useUsers';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const [users, refetch] = useUsers();

  const handlerUpdate = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Can you want to promot ${user.name} to admin ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Promot it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'PATCH',
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Promoted!',
                text: `${user.name} has been promoted to Admin`,
                icon: 'success',
              });
            }
          });
      }
    });
  };

  // handler delete here
  const handlerDeleteUser = id => {
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
        fetch(`http://localhost:5000/users/${id}`, {
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
    <aside className="mt-12 w-full bg-slate-100 min-h-[100vh]">
      <SectionTitle heading="MANAGE ALL USERS" subHeading="How many??" />

      <div className="overflow-x-auto mt-12 w-10/12 mx-auto bg-white p-3">
        <h3 className="text-4xl font-semibold font-[Cinzen] pb-5">
          Total Users: {users.length}
        </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054]">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'admin'
                  ) : (
                    <>
                      <button
                        onClick={() => handlerUpdate(user)}
                        title="click to make admin"
                      >
                        <FaUser />
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handlerDeleteUser(user._id)}
                    className="btn btn-error text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default AllUsers;
