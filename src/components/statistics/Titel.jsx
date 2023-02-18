import PropTypes from 'prop-types';
export const Titel = ({ titel }) => {
  if (titel) {
    return <h2>{titel}</h2>;
  } else {
    <></>;
  }
};

Titel.propTypes = {
  titel: PropTypes.string,
};
