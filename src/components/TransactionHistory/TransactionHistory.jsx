import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTableTitle,
  TransactionTableRow,
  TransactionTableHeaderEl,
  TransactionTableBody,
  TransactionTableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableTitle>
        <TransactionTableRow>
          <TransactionTableHeaderEl>Type</TransactionTableHeaderEl>
          <TransactionTableHeaderEl>Amount</TransactionTableHeaderEl>
          <TransactionTableHeaderEl>Currency</TransactionTableHeaderEl>
        </TransactionTableRow>
      </TransactionTableTitle>

      <TransactionTableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableRow key={id}>
            <TransactionTableCell>{type}</TransactionTableCell>
            <TransactionTableCell>{amount} </TransactionTableCell>
            <TransactionTableCell>{currency}</TransactionTableCell>
          </TransactionTableRow>
        ))}
      </TransactionTableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
