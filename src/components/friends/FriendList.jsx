// import { FriendListItem } from './FriendListItem';
import { FriendsUl } from './Friend.styled';
import { FriendsItem, Name, Avatar, OnLine } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <OnLine isOnline={isOnline}></OnLine>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendsItem>
      ))}
    </FriendsUl>
  );
};
