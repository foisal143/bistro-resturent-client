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
import ContactPage from '../pages/ContactPage/ContactPage/ContactPage';
import AdminRoute from '../AdminRoute/AdminRoute';
import PayPage from '../pages/DashboardUser/PayPage/PayPage';
import PaymentHistory from '../pages/DashboardUser/PaymentHistory/PaymentHistory';
import Reservation from '../pages/DashboardUser/Reservation/Reservation';
import MyBookings from '../pages/DashboardUser/MyBookings/MyBookings';
import AddREview from '../pages/DashboardUser/AddReview/AddREview';
import ManageBookings from '../pages/DashboardUser/ManageBookings/ManageBookings';

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
      {
        path: 'contact',
        element: <ContactPage />,
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
        path: 'pay',
        element: (
          <PrivateRoute>
            <PayPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'payment-history',
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: 'reservation',
        element: (
          <PrivateRoute>
            <Reservation />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-booking',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-review',
        element: (
          <PrivateRoute>
            <AddREview />
          </PrivateRoute>
        ),
      },

      // admin route
      {
        path: 'all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'add-item',
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-items',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-items/update-item/:id',
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
    ],
  },
]);

export default router;
