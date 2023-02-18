import { FriendListItem } from './FriendListItem';
import { FriendsUl } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      <FriendListItem friends={friends} />
    </FriendsUl>
  );
};
