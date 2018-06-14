import React, { Component } from "react";
import PropTypes from "prop-types";

const offsetCalculator = e => {
  const dimension = {
    width: e.target.offsetWidth,
    height: e.target.offsetHeight
  };
  const pos = {
    left: e.target.offsetLeft,
    top: e.target.offsetTop
  };

  const client = {
    x: e.clientX || e.touches[0].clientX,
    y: e.clientY || e.touches[0].clientY
  };

  const offset = {
    x: pos.left + client.x - pos.left,
    y: pos.top + client.y - pos.top
  };
  return [offset, client];
};

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

  render() {
    const {
      children,
      drag,
      onDrag,
      style,
      dragPos,
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
              left: dragPos.x
            },
            onMouseDown,
            onTouchStart
          })
        : React.cloneElement(child, {
            ...otherProps,
            onMouseDown,
            onTouchStart
          });
    });
    return movableChild;
  }
}
