import { ProfileList } from './profile/ProfileList';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../jsonFile/user.json';
import data from '../jsonFile/data.json';
import friends from '../jsonFile/friends.json';
import transactions from '../jsonFile/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ProfileList user={user} />
      <Statistics titel="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
