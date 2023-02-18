import { StatisticsList } from './StatisticsList';
import { Titel } from './Titel';

export const Statistics = ({ titel, data }) => {
  return (
    <section class="statistics">
      <Titel titel={titel} />
      <StatisticsList data={data} />
    </section>
  );
};
