import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaComment } from 'react-icons/fa';
const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form data submitted:');
  };
  return (
    <section className="my-20">
      <SectionTitle heading="contact form" subHeading="Send Us a Message" />

      <div className=" w-full mt-12 md:w-10/12 mx-auto p-6 bg-slate-100 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="flex-1 mr-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="flex-1 ml-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="phone"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="message"
              rows="4"
              cols="50"
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#D1A054] flex items-center gap-2 upparcase w-fit  text-white py-2 px-4 "
            >
              Send Message <FaComment />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
