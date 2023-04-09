import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;

  padding-top: 5px;
  padding-bottom: 5px;

  border: 1px solid var(--color-text-grey);
  border-radius: 10px;
  cursor: pointer;

  -webkit-box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    -webkit-box-shadow: 0px -2px 9px 6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -2px 9px 6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -2px 9px 6px rgba(0, 0, 0, 0.75);
  }
`;

const setStatusBgColor = props => {
  switch (props.isOnline) {
    case true:
      return 'var(--color-bcg-online-status)';
    case false:
      return 'var(--color-bcg-offline-status)';
    default:
      return '#808080';
  }
};

export const Status = styled.span`
  display: inline-block;
  margin-left: 25px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${setStatusBgColor};
`;

export const Avatar = styled.img`
  margin-left: 35px;
`;

export const Name = styled.p`
  margin-left: 55px;
  font-size: 25px;
  font-weight: 700;
`;
