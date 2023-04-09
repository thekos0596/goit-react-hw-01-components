import { FriendsListItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width='48' />
      <Name>{name}</Name>
    </FriendsListItem>
  );
};
