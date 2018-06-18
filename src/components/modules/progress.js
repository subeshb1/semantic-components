import React, { Component } from "react";
import PropTypes from "prop-types";
import { colorDef } from "../lib/react-extras";
import { extractUnit } from "../addons/display";

export default class Progress extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string,
    percent: PropTypes.number,
    label: PropTypes.string,
    indicating: PropTypes.bool,
    progress: PropTypes.string,
    active: PropTypes.bool,
    state: PropTypes.oneOf(["error", "success", "warning"]),
    inverted: PropTypes.bool,
    attached: PropTypes.oneOf(["top", "bottom"]),
    size: PropTypes.oneOf(["tiny", "small", "large", "big"]),
    color: PropTypes.oneOf(colorDef),
    fixed: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    extra: "",
    percent: 0
  };
  render() {
    const {
      as,
      children,
      extra,
      indicating,
      label,
      percent,
      progress,
      state,
      attached,
      inverted,
      active,
      fixed,
      color,
      size,
      ranges,
      ...otherProps
    } = this.props;
    const rangeColor = extractUnit(ranges, percent).fold(x => x, x => x.color);
    const className = `
    ui
    ${indicating ? "indicating" : ""}
    ${active ? "active" : ""}
    ${inverted ? "inverted" : ""}
    ${attached ? attached + " attached" : ""}
    ${color || ""}
    ${rangeColor || ""}
    ${size || ""}
    ${extra}
    progress
    ${state || ""}
    `.replace(/\s+/g, " ");

    const newChild = (
      <React.Fragment>
        <div
          className="bar"
          style={{
            width: (percent % 105) + "%",
            transition: "width 0.3s ease,background-color 1s ease",
            ...(fixed
              ? {
                  top: 0,
                  left: 0,
                  position: "fixed",
                  height: 3
                }
              : {})
          }}
        >
          <div className="progress">{progress}</div>
        </div>
        <div className="label">{label}</div>
      </React.Fragment>
    );
    const renderElement = React.createElement(
      as,
      {
        className,
        "data-percent": `${percent}`,
        style: fixed
          ? {
              top: 0,
              left: 0,
              position: "fixed",
              zIndex: 10000,
              width: "100%"
            }
          : {},
        ...otherProps
      },
      newChild
    );
    return renderElement;
  }
}
