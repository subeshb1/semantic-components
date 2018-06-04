import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../elements/icon";

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
const DropDownMenu = ({ children, active, left, selected, ...otherProps }) => {
  return (
    <div
      tabIndex="-1"
      className={`${left ? "left" : ""} menu transition ${
        active ? "visible" : "hidden"
      }`}
      {...otherProps}
    >
      {React.Children.map(children, (child, index) => {
        // if(child.type.name ==="DropDown")
        // console.log(child);
        if (index === selected) {
          let chi = React.cloneElement(child, {
            className: "item active selected",
            selected: true
          });
          console.log(chi);
          return chi;
        }
        return React.cloneElement(child, {
          className: "item",
          selected: false
        });
      })}
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
      close: [...close],
      selected: -1
    };
    //ref to the dropdown
    this.dropDown = React.createRef();
    this.dataCount = 8;
  }
  //DropDown.Menu
  static Menu = DropDownMenu;
  //Proptypes
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    text: PropTypes.string,
    nested: PropTypes.bool,
    fluid: PropTypes.bool
  };
  //defaultProps
  static defaultProps = {
    as: "div",
    text: "",
    //To Nest DropDowns
    nested: false,
    selection: false,
    open: [],
    close: [],
    fluid: false,
    selected: false
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

      document.addEventListener("keyup", e => {
        console.log(e);
        let code = e.keyCode ? e.keyCode : e.which;
        if (code == 9 && document.activeElement === this.dropDown.current)
          this.setState(({ active }) => ({ active: true }));
      });

      //Adding open listeners
      for (let event of open) {
        this.dropDown.current.addEventListener(event, e => {
          this.setState(({ active }) => ({ active: true }));
        });
      }
      //Adding close listeners
      for (let event of close) {
        this.dropDown.current.addEventListener(event, () => {
          this.setState(({ active }) => ({ active: false }));
        });
      }

      if (this.props.selection || true) {
        this.dropDown.current.addEventListener("keydown", e => {
          if (this.state.active) {
            if (e.keyCode === 27 || e.keyCode === 9) {
              this.dropDown.current.blur();
              this.setState(({ selected }) => ({
                active: false,
                selected: -1
              }));
              return;
            }
            if (this.state.selected === -1 && e.keyCode !== 9) {
              this.setState({ selected: 0 });
            } else {
              if (e.keyCode === 40) {
                this.setState(({ selected }) => ({
                  selected: (selected + 1) % this.dataCount
                }));
              } else if (e.keyCode === 38) {
                this.setState(({ selected }) => ({
                  selected: (this.dataCount + selected - 1) % this.dataCount
                }));
              } else if (e.keyCode === 13) {
                this.setState(({ selected }) => ({
                  active: false,
                  selected: -1
                }));
              }
            }
          }
        });
      }
    }
  }

  render() {
    const {
      as,
      children,
      text,
      nested,
      selection,
      fluid,
      selected
    } = this.props;
    const className = nested
      ? `${selected ? "active selected" : ""}  item`
      : `
    ui
    ${fluid ? "fluid" : ""}
    ${selection ? "selection" : ""}
    dropdown
    ${this.state.active ? "active visible" : ""}
    `.replace(/\s+/g, " ");
    if (!selection) {
      const cloneChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
          active: this.state.active,
          selected: this.state.selected
        });
      });

      const renderElement = React.createElement(
        as,
        {
          className,
          //Reference to the Div
          ref: this.dropDown,
          //TO make tab focusable
          tabIndex: nested ? -1 : 0,
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
            console.log(document.activeElement === e.currentTarget);
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
