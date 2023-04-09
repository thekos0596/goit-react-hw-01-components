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
