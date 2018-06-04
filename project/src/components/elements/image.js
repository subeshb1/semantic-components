import React, { Component } from "react";
import PropTypes from "prop-types";

export const ImageGroup = ({ size, extra, ...otherProps }) => {
  return <div className={`ui ${size} ${extra} images`} {...otherProps} />;
};

export default class Image extends Component {
  static Group = ImageGroup;
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    size: "",
    src: undefined,
    wrapped: false,
    as: "img",
    state: "",
    avatar: false,
    circular: false,
    centered: false,
    verticalAlign: "",
    rounded: false,
    spaced: false,
    float: "",
    fluid: false,
    alt: ""
  };
  render() {
    const {
      size,
      wrapped,
      as,
      children,
      state,
      avatar,
      bordered,
      spaced,
      rounded,
      circular,
      fluid,
      float,
      centered,
      verticalAlign,
      alt,
      ...otherProps
    } = this.props;
    const className = `
        ui
        ${size}
        ${state}
        ${avatar ? "avatar" : ""}
        ${rounded ? "rounded" : ""}
        ${circular ? "circular" : ""}
        ${spaced ? (typeof spaced === "string" ? spaced : "") + " spaced" : ""}
        ${centered ? "centered" : ""}
        ${fluid ? "fluid" : ""}
        ${bordered ? "bordered" : ""}
        ${verticalAlign ? verticalAlign + " aligned" : ""}
        ${float ? float + " floated" : ""}
        image
        `.replace(/\s+/g, " ");

    if (wrapped || children || as === "div" || as === "a") {
      let newAs = as === "img" ? "div" : as;
      const {
        "data-tooltip": dataTooltip,
        "data-position": dataPosition,
        "data-inverted": dataInverted,
        ...remainingProps
      } = otherProps;
      return React.createElement(
        newAs,
        {
          className,
          "data-tooltip": dataTooltip,
          "data-position": dataPosition,
          "data-inverted": dataInverted
        },
        children,

        <img {...remainingProps} alt={alt} />
      );
    }
    return <img className={className} {...otherProps} alt={alt} />;
  }
}
