export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  ));
};
