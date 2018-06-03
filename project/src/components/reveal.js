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
    animation: PropTypes.oneOf(["move", "fade", "rotate",'move right','move up','move down','rotate left']),
    instant: PropTypes.bool,
    show: PropTypes.oneOf([undefined, true, false])
  };
  static defaultProps = {
    as: "div",
    animation: "fade",
    instant: false,
    show: undefined,
    style:{width:"fit-content"}
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
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${show !== undefined ? (show ? "active" : "disabled") : ""}
    ${instant ? "instant" : ""}
    ${animation}
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
