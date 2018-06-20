"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Item = function Item(_ref) {
  var children = _ref.children,
      active = _ref.active,
      onClick = _ref.onClick;

  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, Object.assign({
      active: active
    }, child.type === Title ? { onClick: onClick } : {}));
  });
};

var Title = function Title(_ref2) {
  var _ref2$as = _ref2.as,
      as = _ref2$as === undefined ? "div" : _ref2$as,
      children = _ref2.children,
      active = _ref2.active,
      otherProps = _objectWithoutProperties(_ref2, ["as", "children", "active"]);

  return _react2.default.createElement(as, Object.assign({ className: (active ? "active " : "") + " title" }, otherProps), children);
};

var Content = function Content(_ref3) {
  var _ref3$as = _ref3.as,
      as = _ref3$as === undefined ? "div" : _ref3$as,
      children = _ref3.children,
      active = _ref3.active,
      otherProps = _objectWithoutProperties(_ref3, ["as", "children", "active"]);

  return (
    // <Display show={active}>
    _react2.default.createElement(
      _.Transition2,
      {
        transition: [{
          style: {
            maxHeight: 0,
            overflow: "hidden",
            paddingTop: "0px",
            paddingBottom: "0px",
            display: "block"
          },
          start: true
        }, {
          style: function style(x, node, n) {
            return {
              maxHeight: 30 + n + "px",
              paddingTop: "7px",
              paddingBottom: "20.7px"
            };
          },
          duration: 300
        }, {
          style: {
            maxHeight: "",
            paddingBottom: "s"
          }
        }],
        onRemove: [{
          style: function style(x, y, n) {
            return {
              maxHeight: n + "px"
            };
          },
          start: true
        }, {
          style: {
            maxHeight: 0 + "px",
            paddingTop: "0",
            paddingBottom: "0",
            overflow: "hidden"
          },
          duration: 300
        }],
        onEnter: [{
          style: {
            display: active ? "block" : "none"
          },
          start: true
        }],
        animate: active,
        remove: !active
      },
      _react2.default.createElement(as, Object.assign({
        className: "  content"
      }, otherProps), children)
    )
    // </Display>

  );
};
var Accordion = (_temp2 = _class = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      active: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          styled = _props.styled,
          sub = _props.sub,
          inverted = _props.inverted,
          fluid = _props.fluid,
          extra = _props.extra,
          menu = _props.menu,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "styled", "sub", "inverted", "fluid", "extra", "menu"]);

      var className = ("\n    " + (sub ? "" : "ui") + "\n    " + (styled ? "styled" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (fluid ? "fluid" : "") + "\n    " + extra + "\n    accordion\n    " + (menu ? " vertical menu" : "") + "\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({
        className: className
      }, otherProps), children);
      return renderElement;
    }
  }]);

  return Accordion;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  styled: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool,
  extra: _propTypes2.default.string
}, _class.defaultProps = {
  as: "div",
  extra: ""
}, _class.Item = Item, _class.Title = Title, _class.Content = Content, _temp2);
exports.default = Accordion;

//# sourceMappingURL=Accordion.js.map