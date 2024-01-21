import { useContext, useEffect, useState } from 'react';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyBookings = () => {
  const axiosSciure = useAxiosWithAuth();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(true);
  useEffect(() => {
    axiosSciure.get(`/bookings?email=${user?.email}`).then(res => {
      setBookings(res.data);
    });
  }, [axiosSciure, user, control]);

  const handlerDelete = id => {
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
          .delete(`/bookings/${id}`)

          .then(data => {
            if (data.data.deletedCount > 0) {
              setControl(!control);
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
        heading="MY BOOKINGS"
        subHeading="Excellent Ambience"
      ></SectionTitle>
      <div className="overflow-x-auto mt-12 px-5 lg:px-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th>#</th>
              <th>Email</th>
              <th>Guests</th>
              <th>Date</th>
              <th>Time </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booked, i) => (
              <tr key={booked._id}>
                <td>{i + 1}</td>
                <td>{booked.email}</td>
                <td>{booked.guest}</td>
                <td>{moment(booked.date).format('MMM Do YY')}</td>
                <td>{booked.time}</td>
                <td>
                  <button
                    onClick={() => handlerDelete(booked._id)}
                    className="btn btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyBookings;
