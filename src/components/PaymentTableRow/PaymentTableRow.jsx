import moment from 'moment';

const PaymentTableRow = ({ item, i }) => {
  const { names } = item;

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{item.email}</td>
      <td>{names[0]} ...</td>
      <td>${item.price}</td>
      <td>{moment(item.date).format('MMM Do YY')}</td>
    </tr>
  );
};

export default PaymentTableRow;
