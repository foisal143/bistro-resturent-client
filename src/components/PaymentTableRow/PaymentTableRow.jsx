import moment from 'moment';

const PaymentTableRow = ({ item, i }) => {
  const { names } = item;

  const sliecedName = names.length > 2 ? names.slice(2) : names;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{item.email}</td>
      <td>
        {sliecedName.map((name, i) => (
          <span key={i}>
            {' '}
            {name} {names.length > 1 ? ',' : ''}
          </span>
        ))}
      </td>
      <td>${item.price}</td>
      <td>{moment(item.date).format('MMM Do YY')}</td>
    </tr>
  );
};

export default PaymentTableRow;
