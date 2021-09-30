import React from 'react'
import PropTypes from 'prop-types';
const Transactions = ({items}) => {
  
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id,type,amount,currency})=>
 <tr key={id}>
 <td>{type}</td>
 <td>{amount}</td>
 <td>{currency}</td>
</tr>
      )}
   

  </tbody>
</table>
    )
}
export default Transactions

Transactions.propTypes={
   id:PropTypes.string,
   type:PropTypes.string,
   amount:PropTypes.number,
   currency:PropTypes.string,
}