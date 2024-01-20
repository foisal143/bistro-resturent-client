import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { Swal } from 'sweetalert2/dist/sweetalert2';
import { useNavigate } from 'react-router-dom';
const axiosSciure = axios.create({
  baseURL: 'http://localhost:5000',
});
const useAxiosWithAuth = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  // Add an interceptor for handling requests
  axiosSciure.interceptors.request.use(
    config => {
      // Add the access token to the headers if available in localStorage
      const accessToken = localStorage.getItem('ac-token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // Add an interceptor for handling errors
  axiosSciure.interceptors.response.use(
    response => response,
    error => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        return logout().then(() => {
          Swal.fire({
            title: 'Login expaierd?',
            text: 'You should login again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go To  Login!',
          }).then(result => {
            if (result.isConfirmed) {
              navigate('/login');
            }
          });
        });
      }
      // Handle error response, if needed
      return Promise.reject(error);
    }
  );

  return axiosSciure;
};

export default useAxiosWithAuth;
