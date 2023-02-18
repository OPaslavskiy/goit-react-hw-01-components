import { ProfileList } from './profile/ProfileList';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../jsonFile/user.json';
import data from '../jsonFile/data.json';
import friends from '../jsonFile/friends.json';
import transactions from '../jsonFile/transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileList user={user} />
      <Statistics titel="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
