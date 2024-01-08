import Navbar from '../pages/sharedPages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPages/Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
