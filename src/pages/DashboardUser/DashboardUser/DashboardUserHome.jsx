import { IoWalletSharp } from 'react-icons/io5';
import useMenu from '../../../hooks/useMenu';
import {
  FaCalendar,
  FaMoneyBillAlt,
  FaPhone,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
import IsAdmin from '../../../hooks/isAdmin';
import useUsers from '../../../hooks/useUsers';
const DashboardUserHome = () => {
  const { user } = useContext(AuthContext);
  const [menus] = useMenu();
  const [users] = useUsers();
  const [isadmin] = IsAdmin();
  return (
    <div className="px-12 pt-12  w-full bg-white">
      <h3 className="text-3xl font-[Cinzen] font-semibold ">
        Hi, Welcome Back!
      </h3>
      <div className="grid my-10 grid-cols-1 md:grid-cols-3 gap-5">
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FCDBFF] from-[#BB34F5] w-full text-white rounded-md h-[120px] flex justify-center items-center gap-3">
          <span className="text-4xl">{<IoWalletSharp></IoWalletSharp>}</span>
          <aside>
            <h3 className="text-3xl font-bold">{menus.length}</h3>
            <p className="uppercase text-xl font-semibold">{'menu'}</p>
          </aside>
        </div>
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FDE8C0] from-[#D3A256] w-full text-white rounded-md h-[120px] flex justify-center items-center gap-3">
          <span className="text-4xl">
            {isadmin ? <FaUsers /> : <FaShoppingBag />}
          </span>
          <aside>
            <h3 className="text-3xl font-bold">
              {isadmin ? users.length : menus.length}
            </h3>
            <p className="uppercase text-xl font-semibold">
              {isadmin ? 'users' : 'shop'}
            </p>
          </aside>
        </div>
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FECDE9] from-[#FE4880] w-full text-white rounded-md h-[120px] flex justify-center items-center gap-3">
          <span className="text-4xl">{<FaPhone />}</span>
          <aside>
            <h3 className="text-3xl font-bold">
              {`+ ${Math.round(Math.random() * 10000000000)}`}
            </h3>
            <p className="uppercase text-xl font-semibold">{'contact'}</p>
          </aside>
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-full flex justify-center items-center h-[460px] bg-[#FFEDD5]">
          <div>
            <h3 className="upparcase mb-5 text-4xl font-semibold font-[Cinzen] text-center">
              {'User'}
            </h3>
            <div className="p-1 flex justify-center items-center w-32  h-32    mx-auto rounded-full bg-[#D1A054]">
              <img
                className=" w-full h-full rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
            <h3 className="upparcase mt-5 text-4xl font-semibold font-[Cinzen] text-center">
              {user?.displayName}
            </h3>
          </div>
        </div>

        <div className="w-full border-l-2 md:border-l-[#D1A054] h-[460px] bg-[#FEF9C3]">
          <h3 className="text-3xl mb-10 mt-12 ms-12 font-semibold font-[Cinzen]">
            Your Activities
          </h3>

          <ul className="ps-12 space-y-5">
            <li className="flex text-[#0088FE] items-center gap-3 text-xl font-semibold font-[Cinzen]">
              <FaShoppingCart /> Orders: 6
            </li>
            <li className="flex text-[#00C4A1] items-center gap-3 text-xl font-semibold font-[Cinzen]">
              <FaStar /> Reviews: 2
            </li>
            <li className="flex text-[#FFBB28] items-center gap-3 text-xl font-semibold font-[Cinzen]">
              <FaCalendar /> Bookings: 1
            </li>
            <li className="flex text-[#FF8042] items-center gap-3 text-xl font-semibold font-[Cinzen]">
              <FaMoneyBillAlt /> Payment:3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserHome;
