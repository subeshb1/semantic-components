import React, { Component } from "react";

export default class Flag extends Component {
static defaultProps = {
    name:"",
    extra:"",
}
  render() {
      const {name,extra} = this.props;
    return <i className={` ${extra} ${name} flag`} />;
  }
}
