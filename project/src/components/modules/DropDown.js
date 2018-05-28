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
const DropDownMenu = ({ children, active, left, selected,...otherProps }) => {
  return (
    <div
      tabIndex="-1"
      className={`${left ? "left" : ""} menu transition ${
        active ? "visible" : "hidden"
      }`}
      {...otherProps}
    >
      {React.Children.map( children, (child,index) => {
        if(index === selected)
          return React.cloneElement(child,{className:"selected item"});
        return React.cloneElement(child,{className:"item"});
      } )}
    </div>
  );
};

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    const { open, close } = props;
    this.state = {
      active: true,
      open: [...open],
      close: [...close],
      selected: -1
    };
    //ref to the dropdown
    this.dropDown = React.createRef();
    this.dataCount = 2;
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
    nested: false,
    selection: false,
    open: [],
    close: []
  };

  componentDidMount() {
    // open close triggers
    const { open, close } = this.state;
    // Click outside the dropdown -- Closes DropDown
    if (this.dropDown.current) {
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

      if (this.props.selection) {
        this.dropDown.current.addEventListener("keyup", e => {
          if (this.state.active) {
            if (this.state.selected === -1) {
              this.setState({ selected: 0 });
            } else {
              if (e.keyCode === 40) {
                this.setState(({ selected }) => ({
                  selected: (selected + 1) % this.dataCount
                }));
              } else if (e.keyCode === 38) {
                this.setState(({ selected }) => ({
                  selected: (selected - 1) % this.dataCount
                }));
              }
            }
          }
        });
      }
    }
  }

  render() {
    const { as, children, text, nested, selection } = this.props;
    const className = nested
      ? "item"
      : `
    ui
    ${selection ? "selection" : ""}
    dropdown
    ${this.state.active ? "active visible" : ""}
    `.replace(/\s+/g, " ");
    if (!selection) {
      const cloneChildren = React.Children.map(children, child => {
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
        cloneChildren
      );
      return renderElement;
    } else {
      const cloneChildren = React.Children.map(children, child => {
        console.log(typeof child);
        if (typeof child === "object" && child.type.name === "DropDownMenu")
          return React.cloneElement(child, {
            active: this.state.active,
            selected: this.state.selected
          });
        return child;
      });
      return React.createElement(
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
        cloneChildren
      );
    }
  }
}
