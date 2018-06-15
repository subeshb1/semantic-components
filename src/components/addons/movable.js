import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { fromNullable, LazyBox, Left, Right } from "../lib/react-extras";

const offsetCalculator = e => {
  const client = {
    x: e.clientX || e.touches[0].clientX,
    y: e.clientY || e.touches[0].clientY
  };

  const offset = {
    x: e.target.offsetLeft + client.x - e.target.offsetLeft,
    y: e.target.offsetTop + client.y - e.target.offsetTop
  };
  return [offset, client];
};

const liesInside = (b1, b2, v) => (v <= b1 && v >= b2) || (v <= b2 && v >= b1);
const getTransition = (pos, node, add) =>
  fromNullable(pos && node)
    .map(x => x.getBoundingClientRect())
    .map(
      x => liesInside(pos.x, pos.y, x.top) || liesInside(pos.x, pos.y, x.bottom)
    )
    .map(x => (x ? Right(x) : Left(x)))
    .chain(x => x)
    .map(
      x =>
        pos.x < pos.y
          ? {
              transform: "translateY(-100%)",
              transition: "transform 0.3s ease"
            }
          : { transform: "translateY(100%)", transition: "transform 0.3s ease" }
    )
    .fold(
      x => {
        add(false);
        return { transition: "transform 0.3s ease" };
      },
      x => {
        add(true);
        return x;
      }
    );

export default class Movable extends Component {
  static propTypes = {
    dragPos: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    drag: PropTypes.bool,
    style: PropTypes.object,
    onDrag: PropTypes.func
  };
  node = undefined;
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    // this.props.report(this.node.offsetTop);
    console.log("Yo");
  }

  render() {
    const {
      children,
      drag,
      onDrag,
      style,
      dragPos,
      report,
      pos,
      add,
      ...otherProps
    } = this.props;

    const onMouseDown = e => onDrag(...offsetCalculator(e));
    const onTouchStart = e => onDrag(...offsetCalculator(e));

    const movableChild = React.Children.map(children, (child, index) => {
      return drag && dragPos
        ? React.cloneElement(child, {
            style: {
              ...(child.props.style || {}),
              ...style,
              top: dragPos.y,
              left: dragPos.x,
              userSelect: "none",
              cursor: "move",
              zIndex: 1000,
              pointerEvents: "none",
              transform: "scale(1.2)"
            },
            onMouseDown,
            onTouchStart
          })
        : React.cloneElement(child, {
            ...otherProps,
            onMouseDown,
            onTouchStart,

            style: {
              ...(child.props.style || {}),
              cursor: "move",

              ...(pos ? getTransition(pos, this.node, add) : {})
            }
          });
    });
    return movableChild;
  }
}
