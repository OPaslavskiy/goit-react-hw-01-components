export const ProfileList = ({ user }) => {
    const { stats: { followers, views, likes } } = user;
    return <div class="profile"><div class="description">
        <img
                src={user.avatar}
                alt={user.username}
                class="avatar"
            />
            <p class="name">{user.username}</p>
            <p class="tag">@{user.tag}</p>
            <p class="location">{user.location}</p>
        </div>
        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{likes}</span>
            </li>
        </ul>
    </div>
}
