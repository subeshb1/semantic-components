"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require("../elements/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//Default Title
var DropDownTitle = function DropDownTitle(props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    !props.nested && _react2.default.createElement(
      "div",
      { className: "text" },
      props.text
    ),
    _react2.default.createElement(_icon2.default, { name: (props.left ? "left" : "") + " dropdown" }),
    props.nested && _react2.default.createElement(
      "span",
      { className: "text" },
      props.text
    )
  );
};

// The DropDownMenu
var DropDownMenu = function DropDownMenu(_ref) {
  var children = _ref.children,
      active = _ref.active,
      left = _ref.left,
      selected = _ref.selected,
      otherProps = _objectWithoutProperties(_ref, ["children", "active", "left", "selected"]);

  return _react2.default.createElement(
    "div",
    Object.assign({
      tabIndex: "-1",
      className: (left ? "left" : "") + " menu transition " + (active ? "visible" : "hidden")
    }, otherProps),
    _react2.default.Children.map(children, function (child, index) {
      // if(child.type.name ==="DropDown")
      // console.log(child);
      if (index === selected) {
        var chi = _react2.default.cloneElement(child, {
          className: "item active selected",
          selected: true
        });
        console.log(chi);
        return chi;
      }
      return _react2.default.cloneElement(child, {
        className: "item",
        selected: false
      });
    })
  );
};

var DropDown = (_temp = _class = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

    var open = props.open,
        close = props.close;

    _this.state = {
      active: false,
      open: [].concat(_toConsumableArray(open)),
      close: [].concat(_toConsumableArray(close)),
      selected: -1
    };
    //ref to the dropdown
    _this.dropDown = _react2.default.createRef();
    _this.dataCount = 8;
    return _this;
  }
  //DropDown.Menu

  //Proptypes

  //defaultProps


  _createClass(DropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // open close triggers
      var _state = this.state,
          open = _state.open,
          close = _state.close;
      // Click outside the dropdown -- Closes DropDown

      if (this.dropDown.current) {
        document.addEventListener("click", function (e) {
          if (!_this2.dropDown.current.contains(e.target) && !_this2.dropDown.current !== e.target) _this2.setState(function (_ref2) {
            var active = _ref2.active;
            return { active: false };
          });
        });

        document.addEventListener("keyup", function (e) {
          console.log(e);
          var code = e.keyCode ? e.keyCode : e.which;
          if (code == 9 && document.activeElement === _this2.dropDown.current) _this2.setState(function (_ref3) {
            var active = _ref3.active;
            return { active: true };
          });
        });

        //Adding open listeners
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = open[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            this.dropDown.current.addEventListener(event, function (e) {
              _this2.setState(function (_ref8) {
                var active = _ref8.active;
                return { active: true };
              });
            });
          }
          //Adding close listeners
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = close[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _event = _step2.value;

            this.dropDown.current.addEventListener(_event, function () {
              _this2.setState(function (_ref9) {
                var active = _ref9.active;
                return { active: false };
              });
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (this.props.selection || true) {
          this.dropDown.current.addEventListener("keydown", function (e) {
            if (_this2.state.active) {
              if (e.keyCode === 27 || e.keyCode === 9) {
                _this2.dropDown.current.blur();
                _this2.setState(function (_ref4) {
                  var selected = _ref4.selected;
                  return {
                    active: false,
                    selected: -1
                  };
                });
                return;
              }
              if (_this2.state.selected === -1 && e.keyCode !== 9) {
                _this2.setState({ selected: 0 });
              } else {
                if (e.keyCode === 40) {
                  _this2.setState(function (_ref5) {
                    var selected = _ref5.selected;
                    return {
                      selected: (selected + 1) % _this2.dataCount
                    };
                  });
                } else if (e.keyCode === 38) {
                  _this2.setState(function (_ref6) {
                    var selected = _ref6.selected;
                    return {
                      selected: (_this2.dataCount + selected - 1) % _this2.dataCount
                    };
                  });
                } else if (e.keyCode === 13) {
                  _this2.setState(function (_ref7) {
                    var selected = _ref7.selected;
                    return {
                      active: false,
                      selected: -1
                    };
                  });
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          as = _props.as,
          children = _props.children,
          text = _props.text,
          nested = _props.nested,
          selection = _props.selection,
          fluid = _props.fluid,
          selected = _props.selected;

      var className = nested ? (selected ? "active selected" : "") + "  item" : ("\n    ui\n    " + (fluid ? "fluid" : "") + "\n    " + (selection ? "selection" : "") + "\n    dropdown\n    " + (this.state.active ? "active visible" : "") + "\n    ").replace(/\s+/g, " ");
      if (!selection) {
        var cloneChildren = _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, {
            active: _this3.state.active,
            selected: _this3.state.selected
          });
        });

        var renderElement = _react2.default.createElement(as, {
          className: className,
          //Reference to the Div
          ref: this.dropDown,
          //TO make tab focusable
          tabIndex: nested ? -1 : 0,
          //default click handlers - Click closes or opens the dropdown
          onClick: function onClick(e) {
            if (nested) e.stopPropagation();
            _this3.setState(function (_ref10) {
              var active = _ref10.active;
              return {
                active: !active
              };
            });
          }
        }, _react2.default.createElement(DropDownTitle, { text: text, nested: nested, left: true }), cloneChildren);
        return renderElement;
      } else {
        var _cloneChildren = _react2.default.Children.map(children, function (child) {
          console.log(typeof child === "undefined" ? "undefined" : _typeof(child));
          if ((typeof child === "undefined" ? "undefined" : _typeof(child)) === "object" && child.type.name === "DropDownMenu") return _react2.default.cloneElement(child, {
            active: _this3.state.active,
            selected: _this3.state.selected
          });
          return child;
        });
        return _react2.default.createElement(as, {
          className: className,
          //Reference to the Div
          ref: this.dropDown,
          //TO make tab focusable
          tabIndex: 0,
          //default click handlers - Click closes or opens the dropdown
          onClick: function onClick(e) {
            console.log(document.activeElement === e.currentTarget);
            if (nested) e.stopPropagation();
            _this3.setState(function (_ref11) {
              var active = _ref11.active;
              return {
                active: !active
              };
            });
          }
        }, _cloneChildren);
      }
    }
  }]);

  return DropDown;
}(_react.Component), _class.Menu = DropDownMenu, _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  text: _propTypes2.default.string,
  nested: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  text: "",
  //To Nest DropDowns
  nested: false,
  selection: false,
  open: [],
  close: [],
  fluid: false,
  selected: false
}, _temp);
exports.default = DropDown;

//# sourceMappingURL=DropDown.js.map