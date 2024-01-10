import Navbar from '../pages/sharedPages/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/sharedPages/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes('login') ||
    location.pathname.includes('registar');
  return (
    <>
      {isLogin || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      {isLogin || <Footer></Footer>}
    </>
  );
};

export default Main;
