import st from './Table.module.scss';

function Table() {
  return (
      <>
        <table className={ st['table'] }>
        <thead className={ st['thead'] }>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className={ st['tbody'] }>
          <tr>
            <td>Paradise Egg</td>
            <td>2</td>
            <td>$500.00</td>
            <td>$1 000.00</td>
          </tr>
          <tr>
            <td>3 Eggs in sky</td>
            <td>1</td>
            <td>$320.00</td>
            <td>$320.00</td>
          </tr>
        </tbody>
      </table>
      <div className={ st['total'] }>$1 320.00</div>
    </>
  );
}

export default Table;
