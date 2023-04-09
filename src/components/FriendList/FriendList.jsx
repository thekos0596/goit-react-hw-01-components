import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, ...args }) => (
        <FriendListItem key={id} {...args} />
      ))}
    </FriendsList>
  );
};
