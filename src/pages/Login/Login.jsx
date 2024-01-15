import './Login.css';
import loginImage from '../../assets/others/authentication2.png';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../AuthPorvaider/AuthProvaider';
import toast from 'react-hot-toast';
const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || '/';
  const { googleLogin, loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = data => {
    setError('');
    setSuccess('');

    const { email, password, captcha } = data;

    if (validateCaptcha(captcha)) {
      setSuccess('Login success');
      loginUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          navigate(from, { replace: true });
          setSuccess('Login success');
          const userInfo = {
            name: loggedUser.displayName,
            email: loggedUser.email,
          };
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo),
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId > 0) {
                toast.success('User Added Success');
              }
            });
        })
        .catch(er => setError(er.message));
      return;
    } else {
      setError('captcha not match');
      return;
    }
  };

  const handlerGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const loggedUser = res.user;
        navigate(from, { replace: true });
        setSuccess('Login success');
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId > 0) {
              toast.success('User Added Success');
            }
          });
      })
      .catch(er => setError(er.message));
  };

  return (
    <div className="loginBg py-12 flex justify-center items-center min-h-screen w-full">
      <div className="bgshadow  w-10/12 px-5  lg:p-10 mx-auto">
        <div className="hero  bg-transparent">
          <div className="hero-content flex-col items-center lg:flex-row">
            <div className="text-center lg:text-left">
              <img src={loginImage} alt="" />
            </div>
            <div className="card shrink-0 w-full  lg:w-1/2 bg-transparent">
              <h1 className="text-3xl pt-5 text-center font-[Cinzen] font-bold">
                Login now!
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <div className="form-control mt-5">
                    <LoadCanvasTemplate />
                    <label className="label">
                      <span className="label-text">Captcha</span>
                    </label>
                    <input
                      type="text"
                      placeholder="captcha"
                      {...register('captcha')}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <p className="text-red-500 font-[Inter]">{error}</p>
                  <p className="text-green-500 font-[Inter]">{success}</p>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054B2]">Login</button>
                </div>
              </form>
              <p className="text-center font-[Inter] label-text text-[#D1A054]">
                New here? <Link to="/registar">Create a New Account</Link>
              </p>
              <p className="text-center my-5 label-text font-semibold">
                Or Sign In With
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

export default Login;
