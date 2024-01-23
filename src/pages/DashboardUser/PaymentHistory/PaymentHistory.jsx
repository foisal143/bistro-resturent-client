import { useContext, useEffect, useState } from 'react';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PaymentTableRow from '../../../components/PaymentTableRow/PaymentTableRow';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const axiosSciure = useAxiosWithAuth();
  useEffect(() => {
    axiosSciure.get(`/payments/${user?.email}`).then(res => {
      const data = res.data;
      const sortedData = data.sort((a, b) => {
        return a.date - b.date;
      });
      setPayments(sortedData);
    });
  }, [axiosSciure, user]);

  return (
    <div className="w-full pt-12 px-5">
      <SectionTitle
        heading="PAYMENT HISTORY"
        subHeading="At a Glance!"
      ></SectionTitle>

      <div className="overflow-x-auto mt-12 px-5 lg:px-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th>#</th>
              <th>Email</th>
              <th>Food Names</th>
              <th>Total Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, i) => (
              <PaymentTableRow
                key={item._id}
                item={item}
                i={i}
              ></PaymentTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
