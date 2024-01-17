import { FaUtensilSpoon } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
const imageApiKey = import.meta.env.VITE_IMAGE_APIKEY;
const UpdateItem = () => {
  const [photo, setImage] = useState('');
  const updateMenu = useLoaderData();
  const axiosSciure = useAxiosWithAuth();
  const { name, price, category, recipe } = updateMenu;
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.recipeName.value;
    const price = form.price.value;
    const recipe = form.recipe.value;
    const imageFile = form.image.files[0];
    const category = form.category.value;

    if (!imageFile) {
      return toast.error('you must chose an image');
    }

    // for image hosting
    const formData = new FormData();
    formData.append('image', imageFile);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data.data.display_url);

          const itemsInfo = {
            name,
            price,
            recipe,
            image: data.data.display_url,
            category,
          };

          axiosSciure.put(`/menus/${updateMenu._id}`, itemsInfo).then(data => {
            console.log(data.data);
            if (data.data.modifiedCount > 0) {
              toast.success('product updated success');
              form.reset();
            }
          });
        }
      });

    // image file reader logic
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setImage(reader.result);
    // };
    // reader.readAsDataURL(imageFile);

    // axiosSciure
    //   .put(`/menus/${updateMenu._id}`, itemsInfo)

    //   .then(data => {
    //     if (data.data.modifiedCount > 0) {
    //       toast.success('product update success');
    //     }
    //   });
  };

  return (
    <section className="w-full pt-12">
      <SectionTitle heading="UPDATE ITEM" subHeading=" New Updates? " />

      <div className="w-10/12  mx-auto mt-8 p-6 bg-[#F3F3F3] shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
          {/* Recipe Name, Category, and Price in one row */}
          <div className="mb-4">
            <label
              htmlFor="recipeName"
              className="block text-sm font-medium text-gray-600"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="recipeName"
              name="recipeName"
              defaultValue={name}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Category and Price in one row */}
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-600"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={category}
                required
                className="mt-1 p-2 border rounded-md w-full"
              >
                <option value="">Select Category</option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={price}
                required
                placeholder="$price"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>

          {/* recipe in one row */}
          <div className="mb-4">
            <label
              htmlFor="recipe"
              required
              className="block text-sm font-medium text-gray-600"
            >
              recipe
            </label>
            <textarea
              id="recipe"
              name="recipe"
              defaultValue={recipe}
              placeholder="recipe"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="mt-1 p-2  border rounded-md w-full cursor-pointer"
            />
          </div>
          {/* Add Item Button - full width */}
          <div className="flex justify-start">
            <button
              type="submit"
              className=" text-white px-4 py-2  bg-[#835D23]  focus:outline-none flex items-center gap-2 uppercase focus:shadow-outline-blue "
            >
              Update Item <FaUtensilSpoon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateItem;
