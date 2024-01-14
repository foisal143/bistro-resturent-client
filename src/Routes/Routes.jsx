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
import AddItem from '../pages/DashboardUser/AddItem/AddItem';
import ManageItems from '../pages/DashboardUser/ManageItems/ManageItems';
import UpdateItem from '../pages/DashboardUser/UpdateItem/UpdateItem';

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
        path: 'add-item',
        element: <AddItem />,
      },
      {
        path: 'manage-items',
        element: <ManageItems />,
      },
      {
        path: 'manage-items/update-item/:id',
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
    ],
  },
]);

export default router;
