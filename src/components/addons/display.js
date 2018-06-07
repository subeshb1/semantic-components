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

const getInnerWidth = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? window.screen.width
    : window.innerWidth;

export default class Display extends Component {
  state = {
    res: getInnerWidth()
  };

  static propTypes = {
    show: PropTypes.bool,
    visibleRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }),
    computer: PropTypes.object
  };
  static defaultProps = {};
  static Mobile = Mobile;
  static Computer = Computer;
  static Tablet = Tablet;
  static LargeScreen = LargeScreen;
  resizeHandler = () => {
    this.setState(() => ({ res: getInnerWidth() }));
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.resizeHandler, true);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resizeHandler, true);
  };

  render() {
    const { children, show, visibleRange, computer } = this.props;
    const { res } = this.state;
    //checking nullable
    const display = fromNullable(show)
      // if undefined return true
      .fold(x => Right(true), x => Right(x))
      // check whether to display or not
      .map(x => x && checkRange(visibleRange, res))
      //return value
      .fold(x => x, x => x);

    let newChild = children;
    if (computer && inRange({min:Computer.min,max:Infinity },res))
      newChild = React.Children.map(children, child => {
        return React.createElement(
          child.type,
          { ...computer },
          child.props.children
        );
      });

    return display ? newChild : "";
  }
}
