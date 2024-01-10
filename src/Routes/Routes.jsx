import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../pages/OurShop/OurShop/OurShop';
import Login from '../pages/Login/Login';
import Registar from '../pages/Registar/Registar';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <OurMenu></OurMenu>
          </PrivateRoute>
        ),
      },
      {
        path: 'order/:category',
        element: (
          <PrivateRoute>
            <OurShop></OurShop>
          </PrivateRoute>
        ),
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
]);

export default router;
