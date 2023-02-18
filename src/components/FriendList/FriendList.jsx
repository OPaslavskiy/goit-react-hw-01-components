import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};
