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
    alt: "",

    extra:"",
  };
  render() {
    const {
      size,
      as,
      wrapped,
      children,
      state,
      avatar,
      bordered,
      spaced,
      rounded,
      circular,
      fluid,
      float,
      extra,
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
        ${extra}
        image
        `.replace(/\s+/g, " ");

    if (wrapped || children || as === "div" || as === "a") {
      let newAs = as === "img" ? "div" : as;

      const {
        alt,
        src,
        crossOrigin,
        height,
        width,
        sizes,
        srcSet,
        useMap,
        ismap,
        ...remainingProps
      } = otherProps;
      return React.createElement(
        newAs,
        {
          className,
          ...remainingProps
        },
        children,

        <img
          {...{
            alt,
            src,
            crossOrigin,
            height,
            width,
            sizes,
            srcSet,
            useMap,
            ismap
          }}
          alt={alt}
        />
      );
    }
    return <img className={className} {...otherProps} alt={alt} />;
  }
}
