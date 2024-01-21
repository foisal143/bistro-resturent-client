import Rating from 'react-rating';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { toast } from 'react-hot-toast';
const AddREview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const axiosSciure = useAxiosWithAuth();
  const handleRatingChange = value => {
    // Update the state when the rating changes
    setRating(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || 'Unknown';
    const recipe = form.recipe.value;
    const details = form.details.value;
    const suggetions = form.suggetions.value;
    const reviewInfo = { name, details, rating: rating, recipe, suggetions };
    axiosSciure.post('/reviews', reviewInfo).then(res => {
      if (res.data.insertedId) {
        toast.success('Review Added Done');
      }
    });
  };
  return (
    <section className="pt-12 w-full">
      <SectionTitle
        heading="GIVE A REVIEW..."
        subHeading="Sharing is Caring!!!"
      ></SectionTitle>

      <div className="p-5 bg-white w-11/12 mx-auto mt-12">
        <div className="w-fit mx-auto  text-4xl">
          <h3 className="text-3xl font-semibold font-[Cinzen] text-center mb-3">
            Rate US!
          </h3>
          <Rating
            initialRating={rating}
            emptySymbol={<FaStar className="text-slate-300 mx-1"></FaStar>}
            fullSymbol={<FaStar className="text-yellow-500 mx-1"></FaStar>}
            onChange={handleRatingChange}
          />
        </div>

        <div className="w-10/12 mx-auto mt-8 p-6 bg-gray-100 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="recipe"
              >
                What recipe do you like?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="recipe"
                type="text"
                name="recipe"
                placeholder="Enter your favorite recipe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="suggestions"
              >
                Any suggestions for us?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="suggestions"
                type="text"
                name="suggetions"
                placeholder="Enter your suggestions"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="details"
              >
                Additional Details
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="details"
                name="details"
                placeholder="Enter additional details"
                rows="4"
              />
            </div>
            <button
              className="bg-[#B58130] hover:bg-[#835D23] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddREview;
