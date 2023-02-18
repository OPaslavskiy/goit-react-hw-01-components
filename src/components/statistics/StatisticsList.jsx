import PropTypes from 'prop-types';

export const StatisticsList = ({ data }) => {
  return (
    <ul class="stat-list">
      {data.map(el => (
        <li key={el.id} class="item">
          <span class="label">{el.label}</span>
          <span class="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
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
