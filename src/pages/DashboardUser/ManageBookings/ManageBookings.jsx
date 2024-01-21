import { useContext, useEffect, useState } from 'react';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { TiTickOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
const ManageBookings = () => {
  const axiosSciure = useAxiosWithAuth();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(true);
  useEffect(() => {
    axiosSciure.get(`/bookings`).then(res => {
      setBookings(res.data);
    });
  }, [axiosSciure, user, control]);

  const handlerApproved = id => {
    axiosSciure.patch(`/bookings/${id}`).then(res => {
      if (res.data.modifiedCount > 0) {
        toast.success('Booking Approved');
        setControl(!control);
      }
    });
  };
  return (
    <section className="pt-12 w-full">
      <SectionTitle
        heading="MANAGE ALL BOOKINGS"
        subHeading="At a Glance!"
      ></SectionTitle>

      <div className="overflow-x-auto mt-12 w-11/12 mx-auto bg-white p-5">
        <h3 className="text-4xl font-semibold font-[Cinzen] pb-5">
          Total Bookings: {bookings.length}
        </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th>#</th>
              <th>USER EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>BOOKING DATE</th>
              <th>BOOKING TIME</th>
              <th>ACTIVITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booked, i) => (
              <tr key={booked._id}>
                <th>{i + 1}</th>
                <td>{booked.email}</td>
                <td>{booked.phoneNumber}</td>
                <td>{booked.date}</td>
                <td>{booked.time}</td>
                <td
                  className={`${
                    booked.status === 'pending'
                      ? 'text-red-400'
                      : 'text-green-500'
                  }`}
                >
                  {booked.status}
                </td>
                <td>
                  <button
                    onClick={() => handlerApproved(booked._id)}
                    className={`btn btn-circle  ${
                      booked.status === 'pending'
                        ? 'bg-green-300'
                        : 'bg-green-950 text-white'
                    }`}
                  >
                    <TiTickOutline />
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

export default ManageBookings;
