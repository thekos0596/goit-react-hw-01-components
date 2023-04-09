import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
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
