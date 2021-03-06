import React, { Component } from "react";

export default class Flag extends Component {
  static defaultProps = {
    name: "",
    extra: ""
  };
  render() {
    const { name, extra, ...otherProps } = this.props;
    return <i className={` ${extra} ${name} flag`} {...otherProps} />;
  }
}
