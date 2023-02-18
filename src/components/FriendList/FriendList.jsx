import { FriendListItem } from './FriendListItem';
import { Friends } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
};
