import { TitelStat } from './Statistics.styled';
import PropTypes from 'prop-types';
export const Titel = ({ titel }) => {
  if (titel) {
    return <TitelStat>{titel.toUpperCase()}</TitelStat>;
  } else {
    <></>;
  }
};

Titel.propTypes = {
  titel: PropTypes.string,
};
