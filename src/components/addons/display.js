import React, { Component } from "react";
import PropTypes from "prop-types";
import { Right, fromNullable } from "../lib/react-extras";

export const Mobile = {
  min: 0,
  max: 768
};
export const Tablet = {
  min: 768,
  max: 991
};
export const Computer = {
  min: 992,
  max: 1200
};
export const LargeScreen = {
  min: 1200,
  max: Infinity
};

export const inRange = (range, value) =>
  value >= range.min && value <= range.max;

export const checkRange = (range, res) =>
  //if null
  fromNullable(range)
    // is un Range
    .map(x => inRange(x, res))
    //return value
    .fold(x => true, x => x);

export const shouldDisplay = (show, visibleRange, res) =>
  fromNullable(show)
    // if undefined return true
    .fold(x => Right(true), x => Right(x))
    // check whether to display or not
    .map(x => x && checkRange(visibleRange, res))
    //return value
    .fold(x => x, x => x);

export const getInnerWidth = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? window.screen.width
    : window.innerWidth;

export const filterRanges = (ranges, res) =>
  ranges.filter(x => inRange(x.range, res));

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
    render: PropTypes.arrayOf(
      PropTypes.shape({
        range: PropTypes.shape({
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }).isRequired,
        render: PropTypes.func.isRequired
      })
    ),
    showRange: PropTypes.arrayOf(
      PropTypes.shape({
        range: PropTypes.shape({
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }).isRequired,
        show: PropTypes.bool
      })
    )
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
    const {
      children,
      show,
      visibleRange,
      showRange,
      computer,
      mobile
    } = this.props;
    const { res } = this.state;
    //checking nullable
    const mainDisplay = { range: visibleRange, show };
    const visibilityArray = fromNullable(showRange).fold(
      x => [mainDisplay],
      x => [...filterRanges(x, res), mainDisplay]
    );
    const display = visibilityArray.reduce(
      (acc, dis) => acc && shouldDisplay(dis.show, dis.range, res),
      true
    );
    if (display) {
      let newChild = children;
      if (computer && inRange({ min: Computer.min, max: Infinity }, res))
        newChild = React.Children.map(children, child => {
          return React.cloneElement(child, { ...computer });
        });
      if (mobile && inRange(Mobile, res))
        newChild = React.Children.map(children, child => {
          return React.cloneElement(child, { ...mobile });
        });
      return newChild;
    }
    return "";
  }
}
