import { useContext, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { toast } from 'react-hot-toast';
import LocationCard from '../../../components/LocationCard/LocationCard';
import { FaPhone, FaStopwatch } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
const Reservation = () => {
  const axiosSciure = useAxiosWithAuth();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guestName: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // Add  reservation submission logic here
    const guest = form.guest.value;
    const bookingData = {
      ...formData,
      email: user?.email,
      guest,
      status: 'pending',
    };
    console.log(bookingData);
    axiosSciure.post('/bookings', bookingData).then(res => {
      if (res.data.insertedId) {
        toast.success('Booking success');
        form.reset();
      }
    });
  };
  return (
    <section className="pt-12 w-full pb-12 px-5">
      <SectionTitle
        subHeading="Reservation"
        heading="BOOK A TABLE"
      ></SectionTitle>

      <div className="container mx-auto mt-8">
        {/* First Row */}
        <form onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="lg:flex space-y-5 lg:space-y-0 w-full mb-4">
            <div className="lg:w-1/3 pr-4">
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium text-gray-600"
              >
                Guest Count
              </label>
              <select
                id="guestCount"
                name="guest"
                className="mt-1 p-2 w-full border rounded"
                value={formData.guestCount}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Guest Count
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="lg:w-1/3 pr-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-600"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 p-2 w-full border rounded"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:w-1/3 pr-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-600"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="mt-1 p-2 w-full border rounded"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="lg:flex mx-auto lg:space-y-0 space-y-5 mb-4">
            <div className="lg:w-1/3 pr-4">
              <label
                htmlFor="guestName"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                placeholder="name"
                className="mt-1 p-2 w-full border rounded"
                value={formData.guestName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:w-1/3 pr-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="mt-1 p-2 w-full border rounded"
                value={formData.email}
                onChange={handleChange}
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="lg:w-1/3 ">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="phone number"
                className="mt-1 p-2 w-full border rounded"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <button type="submit" className="bg-[#B58130] btn text-white">
              Book Now
            </button>
          </div>
        </form>
      </div>

      <section className="mt-10 ">
        <SectionTitle
          heading="OUR LOCATION"
          subHeading="Visit Us"
        ></SectionTitle>

        <div className="mt-12 grid grid-cols-1 px-5  md:grid-cols-3 gap-10">
          <LocationCard
            icon={<FaPhone />}
            title="phone"
            info="+8801403406419"
          />
          <LocationCard
            icon={<CiLocationOn />}
            title="ADDRESS"
            info="Gazipur , Dhaka"
          />
          <LocationCard
            icon={<FaStopwatch />}
            title="WORKING HOURS"
            info="Sat to Friday - 10 AM to 10 PM"
          />
        </div>
      </section>
    </section>
  );
};

export default Reservation;
