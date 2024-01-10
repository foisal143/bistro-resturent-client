import registarImage from '../../assets/others/authentication2.png';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthPorvaider/AuthProvaider';
const Registar = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { googleLogin, createUser, updateUserProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { name, password, email, image } = data;
    createUser(email, password)
      .then(res => {
        const registerdUser = res.user;
        setSuccess('Registar success');
        updateUserProfile(registerdUser, name, image)
          .then()
          .catch(er => setError(er.message));
      })
      .catch(er => er.message);
  };

  const handlerGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const loggedUser = res.user;
        setSuccess('Registar success');
        console.log(loggedUser);
      })
      .catch(er => setError(er.message));
  };
  return (
    <div className="loginBg py-12 flex justify-center items-center min-h-screen w-full">
      <div className="bgshadow  w-10/12 p-5 lg:p-10 mx-auto">
        <div className="hero  bg-transparent">
          <div className="hero-content flex-col items-center lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={registarImage} alt="" />
            </div>
            <div className="card shrink-0 w-full  lg:w-1/2 bg-transparent">
              <h1 className="text-3xl pt-5 text-center font-[Cinzen] font-bold">
                Sign Up Now!
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    {...register('name')}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="url"
                    {...register('image')}
                    className="input input-bordered"
                    required
                  />
                  <p className="text-red-500 mt-2">{errors?.message}</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register('email')}
                    className="input input-bordered"
                    required
                  />
                  <p className="text-red-500 mt-2">{errors?.message}</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    {...register('password')}
                    className="input input-bordered"
                    required
                  />
                  <p className="text-red-500 font-[Inter]">{error}</p>
                  <p className="text-green-500 font-[Inter]">{success}</p>
                  <p className="text-red-500 mt-2">{errors?.message}</p>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054B2]">Sign Up</button>
                </div>
              </form>
              <p className="text-center font-[Inter] label-text text-[#D1A054]">
                Already Registared? <Link to="/login"> Go To Login</Link>
              </p>
              <p className="text-center my-5 label-text font-semibold">
                Or Sign Up With
              </p>
              <div className="flex justify-center  items-center gap-10">
                <button className="p-2 hover:bg-[#D1A054] duration-300 text-xl rounded-full border-black border">
                  <FaFacebook></FaFacebook>
                </button>
                <button
                  onClick={handlerGoogleLogin}
                  className="p-2 hover:bg-[#D1A054] duration-300 text-xl rounded-full border-black border"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button className="p-2 hover:bg-[#D1A054] duration-300 text-xl rounded-full border-black border">
                  <FaTwitter></FaTwitter>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
