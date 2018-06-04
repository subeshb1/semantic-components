import React from "react";
import PropTypes from "prop-types";

const Grid = props => {
  const { as, children, ...otherProps } = props;
  const className = `
    ui
    grid
    `.replace(/\s+/g, " ");

  const renderElement = React.createElement(
    as,
    { className, ...otherProps },
    children
  );
  return renderElement;
};

Grid.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func])
};
Grid.defaultProps = {
  as: "div"
};
