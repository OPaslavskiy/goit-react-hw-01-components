
import {ProfileList} from './ProfileList';
import user from '../jsonFile/user.json';

console.log(user);


export const App = () => {
  return <div>
    <ProfileList user={user} />
  </div>
};
