import React, { Component } from "react";
import PropTypes from "prop-types";
import { Right, Left, fromNullable, head } from "../lib/react-extras";

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
  //check if array or object
  fromNullable(ranges instanceof Array ? ranges : undefined)
    //left object right array
    .fold(x => [ranges], x => x)
    //filter
    .filter(x => inRange(x.range, res));

export const extractUnit = (ranges, res) =>
  //checking if range is available
  fromNullable(ranges)
    //filtering range according to res
    .map(x => filterRanges(x, res))
    //Picking the last range
    .map(x => x.slice(-1))
    //extracting
    .map(head)
    //checking if undefined
    .map(x => fromNullable(x))
    //chaining Left or Right
    .chain(x => x);

const clone = (children, props) =>
  React.Children.map(children, child =>
    React.cloneElement(child, { ...props })
  );
export default class Display extends Component {
  state = {
    res: getInnerWidth()
  };

  static propTypes = {
    //Main
    show: PropTypes.bool,
    visibleRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }),
    //Array of secondary
    showRange: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          range: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
          }).isRequired,
          show: PropTypes.bool
        })
      ),
      PropTypes.shape({
        range: PropTypes.shape({
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }).isRequired,
        show: PropTypes.bool
      })
    ]),

    //different render in different ranges
    render: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          range: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
          }).isRequired,
          show: PropTypes.bool
        })
      ),
      PropTypes.shape({
        range: PropTypes.shape({
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }).isRequired,
        show: PropTypes.bool
      })
    ]),
    // Passing different props to children in different ranges
    rangeProps: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          range: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
          }).isRequired,
          show: PropTypes.bool
        })
      ),
      PropTypes.shape({
        range: PropTypes.shape({
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }).isRequired,
        show: PropTypes.bool
      })
    ])
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
      render,
      rangeProps
    } = this.props;
    const { res } = this.state;
    // THe main Display
    const mainDisplay = { range: visibleRange, show };
    //Filtering the available ranges
    const visibilityArray = fromNullable(showRange).fold(
      //if undefined
      x => [mainDisplay],
      //if defined
      x => [...filterRanges(x, res), mainDisplay]
    );

    //Checking whether to display or not
    const display = visibilityArray.reduce(
      (acc, dis) => acc && shouldDisplay(dis.show, dis.range, res),
      true
    );

    return display
      ? //checking if render available
        extractUnit(render, res)
          //Left if  render, Right if no render
          .fold(x => Right(rangeProps), x => Left(x.render(children, res)))
          //Maps if no render
          .map(x =>
            //Same as above but for rangeProps
            extractUnit(x, res).fold(
              //if no range Props return child or null
              x => children || null,
              //return proper range props
              x => clone(children, x.props)
            )
          )
          //simple folding
          .fold(x => x, x => x)
      : //If none of above satisfies
        null;
  }
}
