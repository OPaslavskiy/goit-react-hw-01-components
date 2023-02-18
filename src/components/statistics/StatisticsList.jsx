import PropTypes from 'prop-types';
import { StatList, Item, Percentage } from './Statistics.styled';
import { getRandomHexColor } from '../../utils/randomColor';

export const StatisticsList = ({ data }) => {
  return (
    <StatList>
      {data.map(el => (
        <Item key={el.id} style={{ backgroundColor: getRandomHexColor() }}>
          <span class="label">{el.label}</span>
          <Percentage>{el.percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
