import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]).isRequired,
    })
  ).isRequired,
};
