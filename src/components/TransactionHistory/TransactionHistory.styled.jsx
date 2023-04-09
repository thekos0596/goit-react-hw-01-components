import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border-collapse: collapse;
`;

export const TransactionTableTitle = styled.thead``;

export const TransactionTableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    color: white;
    background-color: #ddd;
  }
`;

export const TransactionTableHeaderEl = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  border: 1px solid #ddd;
`;

export const TransactionTableBody = styled.tbody`
  cursor: pointer;
`;

export const TransactionTableCell = styled.td`
  padding: 8px;
  text-transform: capitalize;
  border: 1px solid #ddd;
`;
