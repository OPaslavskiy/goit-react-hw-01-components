import { ProfileList } from './profile/ProfileList';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import user from '../jsonFile/user.json';
import data from '../jsonFile/data.json';
import friends from '../jsonFile/friends.json';
import transactions from '../jsonFile/transactions.json';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <ProfileList user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
