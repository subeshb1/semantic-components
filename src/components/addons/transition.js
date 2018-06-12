import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Component } from "react";

export default class Transition extends Component {
  static propTypes = {
    start: PropTypes.object,
    end: PropTypes.object,
    delay: PropTypes.number,
    trigger: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string.isRequired,
        start: PropTypes.object,
        end: PropTypes.object,
        delay: PropTypes.number
      }).isRequired
    ),
    onMount: PropTypes.shape({
      start: PropTypes.object,
      end: PropTypes.object,
      delay: PropTypes.number
    }),
    onUnMount: PropTypes.shape({
      start: PropTypes.object,
      end: PropTypes.object,
      delay: PropTypes.number
    })
  };

  static defaultProps = {
    trigger: [],
    delay: 1
  };
  constructor(props) {
    super(props);
    this.node = undefined;
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    const { trigger, start, end, delay, onMount } = this.props;
    if (this.node) {
      this.default = { ...this.node.style };
      if (trigger) {
        trigger.forEach(({ event, start: s1, end: e1, delay: d1 }) => {
          this.node.addEventListener(event, () => {
            this.animation(s1 || start, e1 || end, d1 || delay);
          });
        });
      }
      if (onMount)
        this.animation(
          onMount.start || start,
          onMount.end || end,
          onMount.delay || delay
        );
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.remove) {
      const { start, end, delay, onUnMount } = this.props;
      if (onUnMount) {
        this.animation(
          onUnMount.start || start,
          onUnMount.end || end,
          onUnMount.delay || delay
        );
      }
      return false;
    }
    return true;
  }

  animation(start = this.default, end = this.default, delay = 1) {
    const node = this.node;
    if (node && start && end) {
      Object.entries(start).forEach(obj => {
        node.style[obj[0]] = obj[1];
      });
      setTimeout(() => {
        Object.entries(end).forEach(obj => {
          node.style[obj[0]] = obj[1];
        });
      }, delay);
    }
  }

  render() {
    return this.props.children;
  }
}
