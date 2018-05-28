import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Accordion extends Component {
  state = {
    active: -1
  };
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    styled: PropTypes.bool,
    inverted: PropTypes.bool,
    fluid: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    styled: true,
    inverted: false,
    fluid: false
  };

  render() {
    const { as, children, styled, inverted } = this.props;
    const className = `
    ui
    ${styled ? "styled" : ""}
    ${inverted ? "inverted" : ""}
    accordion
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      {
        className
      },
      React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            let ind = index;
            if (this.state.active === index) ind = -1;
            this.setState({ active: ind });
          },
          isActive: this.state.active === index,
          id: index
        });
      })
    );
    return renderElement;
  }
}

export const AccordionItem = ({ children, onClick, isActive, id }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, { onClick, id, isActive });
  });
};

export const AccordionTitle = ({ children, onClick, id, isActive }) => {
  return React.createElement(
    "div",
    { onClick, className: `${isActive ? "active title" : "title"}` },
    children
  );
};
export const AccordionContent = ({ children, isActive }) => {
  return React.createElement(
    "div",
    {
      className: `${isActive ? "active content fade" : "fade content"}`
    },
    children
  );
};
