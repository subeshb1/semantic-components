import React, { Component } from "react";
import PropTypes from "prop-types";

export const RevealHidden = ({ children }) => (
  <div className="hidden content">{children}</div>
);
export const RevealVisible = ({ children }) => (
  <div className="visible content">{children}</div>
);
export default class Reveal extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    animation: PropTypes.oneOf(["move", "fade", "rotate",'move right','move up','move down','rotate left','slide',"slide masked"]),
    instant: PropTypes.bool,
    show: PropTypes.oneOf([undefined, true, false]),
    extra: PropTypes.string,
  };
  static defaultProps = {
    as: "div",
    animation: "fade",
    instant: false,
    show: undefined,
    extra: "",
  };
  static Hidden = RevealHidden;
  static Visible = RevealVisible;
  render() {
    const {
      as,
      children,
      show,
      animation,
      instant,
      extra,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${show !== undefined ? (show ? "active" : "disabled") : ""}
    ${instant ? "instant" : ""}
    ${animation}
    ${extra}
    reveal
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
