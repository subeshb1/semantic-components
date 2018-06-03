import React, { Component } from "react";
import PropTypes from "prop-types";
// const OR = <div class="or" />;

export default class Button extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    text: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey",
      "black",
      "facebook",
      "twitter",
      "google",
      "vk",
      "linkedin",
      "instagram",
      "youtube"
    ]),
    animated: PropTypes.bool
  };
  static defaultProps = {
    as: "button",
    text: "",
    animated: false,
    color: ""
  };
  render() {
    const { as, text, color, animated, children, ...otherProps } = this.props;
    const className = `
    ui
    ${color}
    ${
      animated
        ? (typeof animated === "string" ? animated : "") + " animated"
        : ""
    }
    button
    `.replace(/\s+/g, " ");

    return React.createElement(
      as,
      { className, tabIndex: 0, ...otherProps },
      children,
      text
    );
  }
}
