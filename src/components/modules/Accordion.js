import React, { Component } from "react";
import PropTypes from "prop-types";
import { Transition2 } from "..";


const Item = ({ children, active, onClick }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      active,
      ...(child.type === Title ? { onClick } : {})
    });
  });
};

const Title = ({ as = "div", children, active, ...otherProps }) => {
  return React.createElement(
    as,
    { className: `${active ? "active " : ""} title`, ...otherProps },
    children
  );
};
const Content = ({ as = "div", children, active, ...otherProps }) => {
  return (
    // <Display show={active}>
    <Transition2
      transition={[
        {
          style: {
            opacity: 0,
            maxHeight: 0,
            overflow: "hidden",
            display: "block"
          },
          start: true
        },
        {
          style: ({ height }, node, n) => {
            return {
              maxHeight: n + "px",
              opacity: 1,
              paddingTop: "6.9px",
              paddingBottom: "30.7px"
            };
          },
          duration: 200
        },
        {
          style: { display: "block" },
          default: true
        }
      ]}
      onRemove={[
        {
          style: (x, { offsetHeight }, n) => ({
            maxHeight: n + "px"
          }),
          start: true
        },
        {
          style: {
            maxHeight: 0 + "px",
            opacity: 0,
            paddingTop: "0",
            paddingBottom: "0",
            overflow: "hidden"
          },
          duration: 200
        },
        {
          style: {},
          default: true
        }
      ]}
      onEnter={[
        {
          style: {
            maxHeight: "0px",
            opacity: 0,
            overflow: "hidden"
          },
          start: true
        }
      ]}
      animate={active}
      remove={!active}
    >
      {React.createElement(
        as,
        {
          className: `  content`,
          ...otherProps
        },
        children
      )}
    </Transition2>
    // </Display>
  );
};
export default class Accordion extends Component {
  state = {
    active: -1
  };
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
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
  static Item = Item;
  static Title = Title;
  static Content = Content;

  render() {
    const { as, children, styled, sub, inverted } = this.props;
    const className = `
    ${sub ? "" : "ui"}
    ${styled ? "styled" : ""}
    ${inverted ? "inverted" : ""}
    accordion
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      {
        className
      },
      children
    );
    return renderElement;
  }
}
