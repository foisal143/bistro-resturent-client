import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../pages/OurShop/OurShop/OurShop';
import Login from '../pages/Login/Login';
import Registar from '../pages/Registar/Registar';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../layouts/Dashboard';
import DashboardUserHome from '../pages/DashboardUser/DashboardUser/DashboardUserHome';
import MyCart from '../pages/DashboardUser/MyCart/MyCart';
import AllUsers from '../pages/DashboardUser/AllUsers/AllUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'our-menu',
        element: <OurMenu></OurMenu>,
      },
      {
        path: 'order/:category',
        element: <OurShop></OurShop>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'registar',
        element: <Registar></Registar>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashboardUserHome></DashboardUserHome>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/cart',
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-users',
        element: <AllUsers />,
      },
      {
        path: '',
      },
    ],
  },
]);

export default router;
