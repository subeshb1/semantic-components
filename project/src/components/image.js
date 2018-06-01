import React, { Component } from "react";

export class ImageGroup extends Component {
  render() {
    const { size, children } = this.props;
    return <div className={`ui ${size} images`}>{children}</div>;
  }
}
export default class Image extends Component {
  static Group = ImageGroup;
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
  };
  render() {
    const {
      size,
      alt,
      src,
      wrapped,
      as,
      children,
      target,
      href,
      state,
      srcSet,
      sizes,
      avatar,
      bordered,
      spaced,
      rounded,
      circular,
      fluid,
      float,
      centered,
      verticalAlign,
      onClick,
      ...otherProps
    } = this.props;
    const className = `
        ui
        ${size}
        ${state}
        ${avatar ? "avatar" : ""}
        ${rounded ? "rounded" : ""}
        ${circular ? "circular" : ""}
        ${spaced ? (typeof spaced==="string"? spaced:"")+" spaced" : ""}
        ${centered ? "centered" : ""}
        ${fluid ? "fluid" : ""}
        ${bordered ? "bordered" : ""}
        ${verticalAlign ? verticalAlign + " aligned" : ""}
        ${float ? float + " floated" : ""}
        image
        `.replace(/\s+/g, " ");

    if (wrapped || children || as === "div") {
      return (
        <div
          className={className}
          onClick={evt => onClick && onClick(this.props, evt)}
           
          {...otherProps}
        >
          {children}
          <img src={src} alt={alt} srcSet={srcSet} sizes={sizes} />
        </div>
      );
    } else if (as === "a") {
      return (
        <a
          href={href}
          target={target}
          className={className}
          onClick={evt => onClick && onClick(this.props, evt)} 
          {...otherProps}
        >
          <img src={src} alt={alt} srcSet={srcSet} sizes={sizes} />
        </a>
      );
    }
    return (
      <img 
      {...otherProps}
        className={className}
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        onClick={evt => onClick && onClick(this.props, evt)}
      />
    );
  }
}
