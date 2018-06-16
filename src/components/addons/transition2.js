import { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { fromNullable, curry, LazyBox, map, filter } from "../lib/react-extras";

const mapStyles = (node, style) => {
  Object.entries(style).forEach(obj => {
    node.style[obj[0]] = obj[1];
  });
};

const clearTimers = arr => arr.forEach(clearInterval);
export default class Transition2 extends Component {
  static propTypes = {
    transition: PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.object,
        duration: PropTypes.number,
        delay: PropTypes.number,
        default: PropTypes.bool,
        timingFunction: PropTypes.string,
        property: PropTypes.string
      })
    ),
    onEnter: PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.object,
        duration: PropTypes.number,
        delay: PropTypes.number,
        default: PropTypes.bool,
        timingFunction: PropTypes.string,
        property: PropTypes.string
      })
    ),
    onRemove: PropTypes.arrayOf(
      PropTypes.shape({
        style: PropTypes.object,
        duration: PropTypes.number,
        delay: PropTypes.number,
        default: PropTypes.bool,
        timingFunction: PropTypes.string,
        property: PropTypes.string
      })
    ),
    remove: PropTypes.bool,
    animate: PropTypes.bool,
    mapEvents: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string.isRequired,
        transition: PropTypes.arrayOf(
          PropTypes.shape({
            style: PropTypes.object,
            duration: PropTypes.number,
            delay: PropTypes.number,
            default: PropTypes.bool,
            timingFunction: PropTypes.string,
            property: PropTypes.string
          })
        )
      })
    )
  };
  timeouts = {};

  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.animate && nextProps.transition) {
      this.transition(nextProps.transition, "animate");
    } else if (nextProps.remove && nextProps.onRemove) {
      this.transition(nextProps.onRemove, "remove");
    }
    return true;
  }
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);

    const { mapEvents, onEnter } = this.props;
    const handler = curry((node, action) => {
      node.addEventListener(
        action.event,
        () => {
          this.transition(action.transition, action.event);
        },
        false
      );
      return action;
    });

    fromNullable(this.node)
      .map(x => (this.default = { ...x.style }))
      .map(x => fromNullable(mapEvents))
      .chain(x => x)
      .chain(x => LazyBox(() => x))
      .map(filter(x => x.event))
      .map(map(handler(this.node)))
      .fold(x => x, x => x);

    fromNullable(onEnter)
      .chain(x => LazyBox(() => x))
      .map(x => this.transition(x, "onEnter"))
      .fold(x => x, x => x);
  }
  //the magic happens
  transition(transitions, event) {
    if (!this.node) return true;
    this.timeouts[event] = fromNullable(this.timeouts[event])
      .map(clearTimers)
      .map(() => mapStyles(this.node, this.default))
      .fold(x => [], x => []);
    const last = transitions.length - 1;
    transitions.reduce((acc, trans, i) => {
      if (trans.start === true) {
        mapStyles(this.node, trans.style);
        return acc;
      }
      const delay = trans.delay || 0;
      const duration = trans.duration || 10;
      const timeout = acc + delay;
      const transition = {
        transition: `
      ${trans.property || "all"}
      ${duration / 1000}s
      ${trans.timingFunction || "ease"}
      ${delay / 1000}s
      `.replace(/\s+/g, " ")
      };
      this.timeouts[event].push(
        setTimeout(() => {
          mapStyles(
            this.node,
            trans.default
              ? { ...transition, ...this.default, ...trans.style }
              : { ...transition, ...trans.style }
          );
          if (last === i) this.timeouts[event] = undefined;
        }, timeout)
      );

      return timeout + duration;
    }, 0);
  }

  render() {
    return this.props.children || null;
  }
}
