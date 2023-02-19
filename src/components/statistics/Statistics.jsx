import { StatisticsList } from './StatisticsList';
import { TitleStat } from './Statistics.styled';
import { StatisticsSection } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <TitleStat> {title.toUpperCase()}</TitleStat>}
      <StatisticsList data={data} />
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
