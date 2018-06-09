"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require("..");

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = (0, _reactExtras.simpleComponent)("header");
Header.displayName = "Menu.Header";
var Item = function Item(props) {
  var active = props.active,
      as = props.as,
      color = props.color,
      text = props.text,
      children = props.children,
      extra = props.extra,
      header = props.header,
      right = props.right,
      fitted = props.fitted,
      otherProps = _objectWithoutProperties(props, ["active", "as", "color", "text", "children", "extra", "header", "right", "fitted"]);

  var className = ("\n    " + (active ? "active" : "") + "\n    " + (header ? "header" : "") + "\n    " + (right ? "right" : "") + "\n    " + (color ? color : "") + "\n    " + (fitted ? fitted + " fitted" : "") + "\n    " + extra + "\n    item\n    ").replace(/\s+/g, " ");

  var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children, text);
  return renderElement;
};
Item.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  color: _propTypes2.default.oneOf(_reactExtras.colorDef),
  extra: _propTypes2.default.string,
  header: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  //TODO - in the future
  dropdown: _propTypes2.default.bool,
  //TODO - in the future
  popup: _propTypes2.default.bool,
  //TOD - in the future
  search: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  fitted: _propTypes2.default.oneOf(["vertically", "horizontally"])
};
Item.defaultProps = {
  as: "a",
  extra: ""
};

var Menu = (_temp = _class = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          sub = _props.sub,
          children = _props.children,
          text = _props.text,
          inverted = _props.inverted,
          container = _props.container,
          color = _props.color,
          extra = _props.extra,
          secondary = _props.secondary,
          fixed = _props.fixed,
          attached = _props.attached,
          borderless = _props.borderless,
          stackable = _props.stackable,
          count = _props.count,
          right = _props.right,
          pointing = _props.pointing,
          tabular = _props.tabular,
          pagination = _props.pagination,
          vertical = _props.vertical,
          size = _props.size,
          compact = _props.compact,
          fluid = _props.fluid,
          items = _props.items,
          labeled = _props.labeled,
          icon = _props.icon,
          otherProps = _objectWithoutProperties(_props, ["as", "sub", "children", "text", "inverted", "container", "color", "extra", "secondary", "fixed", "attached", "borderless", "stackable", "count", "right", "pointing", "tabular", "pagination", "vertical", "size", "compact", "fluid", "items", "labeled", "icon"]);

      var className = ("\n\n    " + (!sub ? "ui" : "") + "\n    " + (size ? size : "") + "\n    " + (sub && right ? "right" : "") + "\n    " + (vertical ? "vertical" : "") + "\n    " + (text ? "text" : "") + "\n    " + (count ? (0, _reactExtras.widthMapper)(count) + " item" : "") + "\n    " + (secondary ? "secondary" : "") + "\n    " + (pointing ? "pointing" : "") + "\n    " + (tabular ? "tabular" : "") + "\n    " + (pagination ? "pagination" : "") + "\n    " + (fixed ? fixed + " fixed" : "") + "\n    " + (attached ? attached + " attached" : "") + "\n    " + (color ? color : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (stackable ? "stackable" : "") + "\n    " + (borderless ? "borderless" : "") + "\n    " + (compact ? "compact" : "") + "\n    " + (fluid ? "fluid" : "") + "\n    " + (labeled ? "labeled" : "") + "\n    " + (icon ? "icon" : "") + "\n    " + extra + "\n    \n    menu\n    ").replace(/\s+/g, " ");

      var mappedItems = items && items.map(function (item, i) {
        return _react2.default.createElement(Item, Object.assign({}, item, {
          key: item.key || item.id || i
        }));
      });
      var child = void 0;
      if (container) {
        child = [_react2.default.createElement(
          _.Container,
          null,
          children,
          mappedItems
        )];
      } else {
        child = [children, mappedItems];
      }
      var renderElement = _react2.default.createElement.apply(_react2.default, [as, Object.assign({ className: className }, otherProps)].concat(_toConsumableArray(child)));
      return renderElement;
    }
  }]);

  return Menu;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  extra: _propTypes2.default.string,
  text: _propTypes2.default.bool,
  count: _propTypes2.default.oneOf(_reactExtras.widthArray),
  secondary: _propTypes2.default.bool,
  sub: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  //pointing menu
  pointing: _propTypes2.default.bool,
  //Tabular menu ot Tab
  tabular: _propTypes2.default.bool,
  pagination: _propTypes2.default.bool,
  //Variations
  fixed: _propTypes2.default.oneOf(["top", "bottom", "left", "right"]),
  attached: _propTypes2.default.oneOf(["top", "bottom", "left", "right", true]),
  color: _propTypes2.default.oneOf(_reactExtras.colorDef),
  inverted: _propTypes2.default.bool,
  stackable: _propTypes2.default.bool,
  borderless: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(_reactExtras.size),
  fluid: _propTypes2.default.bool,
  compact: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  labeled: _propTypes2.default.bool,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]).isRequired
  }).isRequired),
  container: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  extra: ""
}, _class.Item = Item, _class.Header = Header, _temp);
exports.default = Menu;

//# sourceMappingURL=menu.js.map