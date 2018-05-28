import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../icon";

//Default Title
const DropDownTitle = props => {
  return (
    <React.Fragment>
      {!props.nested && <div className="text">{props.text}</div>}
      <Icon name={`${props.left ? "left" : ""} dropdown`} />
      {props.nested && <span className="text">{props.text}</span>}
    </React.Fragment>
  );
};

// The DropDownMenu
const DropDownMenu = ({ children, active, left, ...otherProps }) => {
  return (
    <div
      tabIndex="-1"
      className={`${left ? "left" : ""} menu transition ${
        active ? "visible" : "hidden"
      }`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    const { open, close } = props;
    this.state = {
      active: false,
      open: [...open],
      close: [...close]
    };
    //ref to the dropdown
    this.dropDown = React.createRef();
  }
  //DropDown.Menu
  static Menu = DropDownMenu;
  //Proptypes
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    text: PropTypes.string,
    nested: PropTypes.bool
  };
  //defaultProps
  static defaultProps = {
    as: "div",
    text: "",
    //To Nest DropDowns
    nested: false
  };

  componentDidMount() {
    // open close triggers
    const { open, close } = this.state;
    // Click outside the dropdown -- Closes DropDown
    document.addEventListener("click", e => {
      if (
        !this.dropDown.current.contains(e.target) &&
        !this.dropDown.current !== e.target
      )
        this.setState(({ active }) => ({ active: false }));
    });
    //Adding open listeners
    for (let event of open) {
      this.dropDown.current.addEventListener(event, () => {
        this.setState(({ active }) => ({ active: true }));
      });
    }
    //Adding close listeners
    for (let event of close) {
      this.dropDown.current.addEventListener(event, () => {
        this.setState(({ active }) => ({ active: false }));
      });
    }
  }

  render() {
    const { as, children, text, nested } = this.props;
    const className = nested
      ? "item"
      : `
    ui
    dropdown
    ${this.state.active ? "active visible" : ""}
    `.replace(/\s+/g, " ");

    const newChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {
        active: this.state.active
      });
    });

    const renderElement = React.createElement(
      as,
      {
        className,
        //Reference to the Div
        ref: this.dropDown,
        //TO make tab focusable
        tabIndex: 0,
        //default click handlers - Click closes or opens the dropdown
        onClick: e => {
          if (nested) e.stopPropagation();
          this.setState(({ active }) => ({
            active: !active
          }));
        }
      },
      <DropDownTitle text={text} nested={nested} left />,
      newChildren
    );
    return renderElement;
  }
}
