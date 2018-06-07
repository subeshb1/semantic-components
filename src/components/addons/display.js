import React, { Component } from "react";
import PropTypes from "prop-types";
import { Left, Right, fromNullable } from "../lib/react-extras";

const Mobile = {
  min: 0,
  max: 768
};
const Tablet = {
  min: 768,
  max: 991
};
const Computer = {
  min: 992,
  max: 1200
};
const LargeScreen = {
  min: 1200,
  max: Infinity
};

const inRange = (res, value) => value >= res.min && value <= res.max;

const checkRange = (range, res) =>
  //if null
  fromNullable(range)
    // is un Range
    .map(x => inRange(x, res))
    //return value
    .fold(x => true, x => x);

export default class Display extends Component {
  state = {
    res: window.innerWidth
  };

  static propTypes = {
    show: PropTypes.bool,
    visibleRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    })
  };
  static defaultProps = {};

  componentDidMount = () => {
    this.listener = window.addEventListener("resize", () =>
      this.setState(() => ({ res: window.innerWidth }))
    );
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.listener, false);
  };

  render() {
    const { children, show, visibleRange } = this.props;
    const { res } = this.state;
    console.log(visibleRange);
    //checking nullable
    const display = fromNullable(show)
      // if undefined return true
      .fold(x => Right(true), x => Right(x))
      // check whether to display or not
      .map(x => x && checkRange(visibleRange, res))
      //return value
      .fold(x => x, x => x);

    console.log(display);

    return display ? children : "";
  }
}
