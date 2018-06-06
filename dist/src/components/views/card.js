"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Meta = function Meta(_ref) {
  var as = _ref.as,
      right = _ref.right,
      textAlign = _ref.textAlign,
      otherProps = _objectWithoutProperties(_ref, ["as", "right", "textAlign"]);

  return _react2.default.createElement(as, Object.assign({
    className: (right ? "right floated " : "") + " " + (textAlign ? textAlign + " aligned " : "") + "meta"
  }, otherProps));
};
Meta.defaultProps = {
  as: "div"
};
var Content = function Content(_ref2) {
  var as = _ref2.as,
      extra = _ref2.extra,
      textAlign = _ref2.textAlign,
      otherProps = _objectWithoutProperties(_ref2, ["as", "extra", "textAlign"]);

  return _react2.default.createElement(as, Object.assign({
    className: (extra ? "extra" : "") + " " + (textAlign ? textAlign + " aligned " : "") + " content"
  }, otherProps));
};
Content.defaultProps = {
  as: "div"
};
var Description = function Description(_ref3) {
  var as = _ref3.as,
      right = _ref3.right,
      textAlign = _ref3.textAlign,
      otherProps = _objectWithoutProperties(_ref3, ["as", "right", "textAlign"]);

  return _react2.default.createElement(as, Object.assign({
    className: (right ? "right floated" : "") + " " + (textAlign ? textAlign + " aligned " : "") + " description"
  }, otherProps));
};
Description.defaultProps = {
  as: "div"
};
var Header = function Header(_ref4) {
  var as = _ref4.as,
      extra = _ref4.extra,
      textAlign = _ref4.textAlign,
      otherProps = _objectWithoutProperties(_ref4, ["as", "extra", "textAlign"]);

  return _react2.default.createElement(as, Object.assign({
    className: (extra ? "extra" : "") + " " + (textAlign ? textAlign + " aligned " : "") + " header"
  }, otherProps));
};
Header.defaultProps = {
  as: "div"
};

var CardGroup = (_temp = _class = function (_Component) {
  _inherits(CardGroup, _Component);

  function CardGroup() {
    _classCallCheck(this, CardGroup);

    return _possibleConstructorReturn(this, (CardGroup.__proto__ || Object.getPrototypeOf(CardGroup)).apply(this, arguments));
  }

  _createClass(CardGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          extra = _props.extra,
          link = _props.link,
          column = _props.column,
          doubling = _props.doubling,
          stackable = _props.stackable,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "extra", "link", "column", "doubling", "stackable"]);

      var className = ("\n    ui\n    " + extra + "\n    " + (link ? "link" : "") + "\n    " + (doubling ? "doubling" : "") + "\n    " + (stackable ? "stackable" : "") + "\n    " + (column ? (0, _reactExtras.widthMapper)(column) : "") + "\n    cards\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return CardGroup;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  link: _propTypes2.default.bool,
  extra: _propTypes2.default.string,
  column: _propTypes2.default.oneOf(_reactExtras.widthArray),
  stackable: _propTypes2.default.bool,
  doubling: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  extra: ""
}, _temp);
var Card = (_temp2 = _class2 = function (_Component2) {
  _inherits(Card, _Component2);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          children = _props2.children,
          extra = _props2.extra,
          link = _props2.link,
          fluid = _props2.fluid,
          raised = _props2.raised,
          centered = _props2.centered,
          color = _props2.color,
          otherProps = _objectWithoutProperties(_props2, ["as", "children", "extra", "link", "fluid", "raised", "centered", "color"]);

      var className = ("\n    ui\n    " + extra + "\n    " + (link ? "link" : "") + "\n    " + (color ? color : "") + "\n    " + (fluid ? "fluid" : "") + "\n    " + (raised ? "raised" : "") + "\n    " + (centered ? "centered" : "") + "\n    card\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return Card;
}(_react.Component), _class2.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  extra: _propTypes2.default.string,
  fluid: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  raised: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(_reactExtras.colorDef)
}, _class2.defaultProps = {
  as: "div",
  extra: ""
}, _class2.Header = Header, _class2.Description = Description, _class2.Content = Content, _class2.Meta = Meta, _class2.Group = CardGroup, _temp2);
exports.default = Card;

//# sourceMappingURL=card.js.map