import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../pages/OurShop/OurShop/OurShop';

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
    ],
  },
]);

export default router;
