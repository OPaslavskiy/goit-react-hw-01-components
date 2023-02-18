import PropTypes from 'prop-types';
import {
  Profile,
  Avatar,
  Description,
  Name,
  Stats,
  Label,
  Quantity,
} from './ProfileList.styled';
export const ProfileList = ({ user }) => {
  const {
    stats: { followers, views, likes },
  } = user;
  return (
    <Profile>
      <Description>
        <Avatar src={user.avatar} alt={user.username} class="avatar" />
        <Name>{user.username}</Name>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
};

ProfileList.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
