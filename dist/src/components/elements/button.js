"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonVisible = exports.ButtonHidden = exports.ButtonGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqid = require("uniqid");

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Or = function Or() {
  return _react2.default.createElement("div", { className: "or" });
};

var ButtonGroup = exports.ButtonGroup = (_temp = _class = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          size = _props.size,
          labeled = _props.labeled,
          color = _props.color,
          basic = _props.basic,
          children = _props.children,
          icon = _props.icon,
          compact = _props.compact,
          float = _props.float,
          attached = _props.attached,
          fluid = _props.fluid,
          vertical = _props.vertical,
          width = _props.width,
          extra = _props.extra,
          items = _props.items,
          otherProps = _objectWithoutProperties(_props, ["as", "size", "labeled", "color", "basic", "children", "icon", "compact", "float", "attached", "fluid", "vertical", "width", "extra", "items"]);

      var className = ("\n    " + width + "  \n    " + size + "\n    ui\n    " + (vertical ? "vertical" : "") + "\n    " + (attached ? attached + " attached" : "") + "\n    " + (compact ? "compact" : "") + "\n    " + (basic ? "basic" : "") + "\n    " + color + "\n    " + (fluid ? "fluid" : "") + "\n    " + (float ? float + " floated" : "") + "\n    " + (labeled ? "labeled" : "") + "\n    " + (icon ? "icon" : "") + "\n    " + extra + "\n    buttons\n    ").replace(/\s+/g, " ");

      return _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children, items && items.map(function (_ref, index) {
        var key = _ref.key,
            otherProps = _objectWithoutProperties(_ref, ["key"]);

        return _react2.default.createElement(Button, Object.assign({ key: key || (0, _uniqid2.default)() }, otherProps));
      }));
    }
  }]);

  return ButtonGroup;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  color: _propTypes2.default.oneOf(["primary", "secondary", "positive", "negative", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "facebook", "twitter", "google", "vk", "linkedin", "instagram", "youtube", ""]),
  labeled: _propTypes2.default.bool,
  basic: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["mini", "tiny", "small", "medium", "large", "big", "huge", "massive", ""]),
  float: _propTypes2.default.oneOf(["left", "right", ""]),
  compact: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool,
  attached: _propTypes2.default.oneOf(["left", "right", "bottom", "top", ""]),
  vertical: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  extra: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]).isRequired
  }).isRequired)
}, _class.defaultProps = {
  as: "div",
  color: "",
  labeled: false,
  basic: false,
  icon: false,
  size: "",
  float: "",
  compact: false,
  fluid: false,
  attached: "",
  vertical: false,
  width: "",
  extra: ""
}, _temp);
var ButtonHidden = exports.ButtonHidden = function ButtonHidden(_ref2) {
  var children = _ref2.children,
      text = _ref2.text;
  return _react2.default.createElement(
    "div",
    { className: "hidden content" },
    children,
    text
  );
};
var ButtonVisible = exports.ButtonVisible = function ButtonVisible(_ref3) {
  var children = _ref3.children,
      text = _ref3.text;
  return _react2.default.createElement(
    "div",
    { className: "visible content" },
    children,
    text
  );
};
var Button = (_temp2 = _class2 = function (_Component2) {
  _inherits(Button, _Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          text = _props2.text,
          size = _props2.size,
          labeled = _props2.labeled,
          color = _props2.color,
          animated = _props2.animated,
          basic = _props2.basic,
          children = _props2.children,
          inverted = _props2.inverted,
          icon = _props2.icon,
          active = _props2.active,
          disabled = _props2.disabled,
          social = _props2.social,
          loading = _props2.loading,
          compact = _props2.compact,
          float = _props2.float,
          attached = _props2.attached,
          circular = _props2.circular,
          toggle = _props2.toggle,
          fluid = _props2.fluid,
          extra = _props2.extra,
          otherProps = _objectWithoutProperties(_props2, ["as", "text", "size", "labeled", "color", "animated", "basic", "children", "inverted", "icon", "active", "disabled", "social", "loading", "compact", "float", "attached", "circular", "toggle", "fluid", "extra"]);

      var className = ("\n    " + size + "\n    ui\n    " + (attached ? attached + " attached" : "s") + "\n    " + (compact ? "compact" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (basic ? "basic" : "") + "\n    " + color + "\n    " + social + "\n    " + (circular ? "circular" : "") + "\n    " + (toggle ? "toggle" : "") + "\n    " + (fluid ? "fluid" : "") + "\n    " + (float ? float + " floated" : "") + "\n    " + (animated ? (typeof animated === "string" ? animated : "") + " animated" : "") + "\n    " + (active ? "active" : "") + "\n    " + (loading ? "loading" : "") + "\n    " + (disabled ? "disabled" : "") + "\n    " + (labeled ? (typeof labeled === "string" ? labeled : "") + " labeled" : "") + "\n    " + (icon ? "icon" : "") + "\n    " + extra + "\n    button\n    ").replace(/\s+/g, " ");

      return _react2.default.createElement(labeled || animated || attached ? "div" : as, Object.assign({ className: className, tabIndex: 0 }, otherProps), children, text);
    }
  }]);

  return Button;
}(_react.Component), _class2.Hidden = ButtonHidden, _class2.Or = Or, _class2.Group = ButtonGroup, _class2.Visible = ButtonVisible, _class2.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  text: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["primary", "secondary", "positive", "negative", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "facebook", "twitter", "google", "vk", "linkedin", "instagram", "youtube", ""]),
  animated: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(["horizontal", "vertical", "fade"])]),
  labeled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(["left", "right"])]),
  basic: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  social: _propTypes2.default.oneOf(["facebook", "twitter", "google plus", "vk", "linkedin", "instagram", "youtube", ""]),
  size: _propTypes2.default.oneOf(["mini", "tiny", "small", "medium", "large", "big", "huge", "massive", ""]),
  float: _propTypes2.default.oneOf(["left", "right", ""]),
  compact: _propTypes2.default.bool,
  toggle: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool,
  circular: _propTypes2.default.bool,
  attached: _propTypes2.default.oneOf(["left", "right", "bottom", "top", ""]),
  extra: _propTypes2.default.string
}, _class2.defaultProps = {
  as: "button",
  text: "",
  animated: false,
  color: "",
  labeled: false,
  basic: false,
  icon: false,
  inverted: false,
  active: false,
  loading: false,
  disabled: false,
  social: "",
  size: "",
  float: "",
  compact: false,
  toggle: false,
  fluid: false,
  attached: "",
  extra: ""
}, _temp2);
exports.default = Button;

//# sourceMappingURL=button.js.map