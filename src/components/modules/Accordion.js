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
            paddingTop: "0px",
            paddingBottom: "0px",
            display: "block"
          },
          start: true
        },
        {
          style: (x, node, n) => {
            return {
              maxHeight: 30 + n + "px",
              opacity: 1,
              paddingTop: "7px",
              paddingBottom: "20.7px"
            };
          },
          duration: 300
        },
        {
          style: {
            maxHeight: ""
          }
        }
      ]}
      onRemove={[
        {
          style: (x, y, n) => ({
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
          duration: 300
        }
      ]}
      onEnter={[
        {
          style: {
            display: active ? "block" : "none"
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
    fluid: PropTypes.bool,
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  static Item = Item;
  static Title = Title;
  static Content = Content;

  render() {
    const {
      as,
      children,
      styled,
      sub,
      inverted,
      fluid,
      extra,
      menu,
      ...otherProps
    } = this.props;
    const className = `
    ${sub ? "" : "ui"}
    ${styled ? "styled" : ""}
    ${inverted ? "inverted" : ""}
    ${fluid ? "fluid" : ""}
    ${extra}
    accordion
    ${menu ? " vertical menu" : ""}
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      {
        className,
        ...otherProps
      },
      children
    );
    return renderElement;
  }
}
