import {
  FaBars,
  FaBook,
  FaComment,
  FaHome,
  FaMailBulk,
  FaMoneyBillAlt,
  FaRegCalendar,
  FaRegCalendarCheck,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCarts from '../hooks/useCarts';
import IsAdmin from '../hooks/isAdmin';

const Dashboard = () => {
  const [carts] = useCarts();
  const [isadmin] = IsAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className=" btn w-full  drawer-button lg:hidden"
        >
          <div className="font-[Cinzel]">
            <span className="text-xl font-[900]">BISTRO BOSS</span> <br />
            <span className=" font-semibold pb-5 tracking-[6px]">
              Restaurant
            </span>
          </div>
          <FaBars className="ms-auto"></FaBars>{' '}
        </label>
        <div className="my-12 lg:my-0 flex justify-center  bg-slate-100 w-full h-full">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu space-y-5 uppercase p-4 w-80 min-h-full bg-[#D1A054] ">
          {/* Sidebar content here */}
          <li>
            <div className="">
              <Link to="/dashboard" className="font-[Cinzel] ">
                <span className="text-xl font-[900]">BISTRO BOSS</span> <br />
                <span className=" font-semibold pb-5 tracking-[6px]">
                  Restaurant
                </span>
              </Link>
            </div>
          </li>

          {isadmin ? (
            <>
              <li>
                <Link to="/dashboard">
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <NavLink to="add-item">
                  <FaUtensilSpoon /> add items
                </NavLink>
              </li>
              <li>
                <NavLink to="manage-items">
                  <FaBars /> manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaBook /> Manage bookings{' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="all-users">
                  <FaUsers />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {' '}
              <li>
                <Link to="/dashboard">
                  <FaHome></FaHome> User Home
                </Link>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaRegCalendar /> reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaMoneyBillAlt></FaMoneyBillAlt> payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> my cart{' '}
                  <span className="badge badge-secondary">+{carts.length}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">
                  <FaComment />
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <FaRegCalendarCheck /> my booking
                </NavLink>
              </li>
            </>
          )}

          <div className="h-[2px]  bg-white w-full "></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-menu">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag /> shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaMailBulk></FaMailBulk> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
