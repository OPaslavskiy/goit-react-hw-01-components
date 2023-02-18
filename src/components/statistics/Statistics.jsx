import { StatisticsList } from './StatisticsList';
import { Titel } from './Titel';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({ titel, data }) => {
  return (
    <StatisticsSection>
      <Titel titel={titel} />
      <StatisticsList data={data} />
    </StatisticsSection>
  );
};
