import { FriendsItem, Name, Avatar, OnLine } from './Friend.styled';
import PropTypes from 'prop-types';
export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <FriendsItem key={id}>
      <OnLine isOnline={isOnline}></OnLine>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
