"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionContent = exports.AccordionTitle = exports.AccordionItem = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (_temp2 = _class = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          as = _props.as,
          children = _props.children,
          styled = _props.styled,
          inverted = _props.inverted;

      var className = ("\n    ui\n    " + (styled ? "styled" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    accordion\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, {
        className: className
      }, _react2.default.Children.map(children, function (child, index) {
        return _react2.default.cloneElement(child, {
          onClick: function onClick() {
            var ind = index;
            if (_this2.state.active === index) ind = -1;
            _this2.setState({ active: ind });
          },
          isActive: _this2.state.active === index,
          id: index
        });
      }));
      return renderElement;
    }
  }]);

  return Accordion;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  styled: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  styled: true,
  inverted: false,
  fluid: false
}, _temp2);
exports.default = Accordion;
var AccordionItem = exports.AccordionItem = function AccordionItem(_ref2) {
  var children = _ref2.children,
      onClick = _ref2.onClick,
      isActive = _ref2.isActive,
      id = _ref2.id;

  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, { onClick: onClick, id: id, isActive: isActive });
  });
};

var AccordionTitle = exports.AccordionTitle = function AccordionTitle(_ref3) {
  var children = _ref3.children,
      onClick = _ref3.onClick,
      id = _ref3.id,
      isActive = _ref3.isActive;

  return _react2.default.createElement("div", { onClick: onClick, className: "" + (isActive ? "active title" : "title") }, children);
};
var AccordionContent = exports.AccordionContent = function AccordionContent(_ref4) {
  var children = _ref4.children,
      isActive = _ref4.isActive;

  return _react2.default.createElement("div", {
    className: "" + (isActive ? "active content fade" : "fade content")
  }, children);
};

//# sourceMappingURL=Accordion.js.map