import { StatisticsList } from './StatisticsList';
import { TitelStat } from './Statistics.styled';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({ titel, data }) => {
  return (
    <StatisticsSection>
      {titel && <TitelStat> {titel.toUpperCase()}</TitelStat>}
      <StatisticsList data={data} />
    </StatisticsSection>
  );
};
