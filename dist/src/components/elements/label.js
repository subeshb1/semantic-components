"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LabelGroup = exports.LabelDetail = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelDetail = exports.LabelDetail = (0, _reactExtras.simpleComponent)("detail");
var LabelGroup = exports.LabelGroup = (_temp = _class = function (_Component) {
  _inherits(LabelGroup, _Component);

  function LabelGroup() {
    _classCallCheck(this, LabelGroup);

    return _possibleConstructorReturn(this, (LabelGroup.__proto__ || Object.getPrototypeOf(LabelGroup)).apply(this, arguments));
  }

  _createClass(LabelGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          extra = _props.extra,
          size = _props.size,
          onClick = _props.onClick,
          circular = _props.circular,
          tag = _props.tag,
          color = _props.color,
          otherProps = _objectWithoutProperties(_props, ["children", "extra", "size", "onClick", "circular", "tag", "color"]);

      var className = ("\n        ui\n        " + extra + "  \n        " + size + "\n        " + (circular ? "circular" : "") + "\n        " + color + "\n        " + (tag ? "tag" : "") + "\n        labels\n        ").replace(/\s+/g, " ");

      return _react2.default.createElement(
        "div",
        Object.assign({ className: className }, otherProps),
        children
      );
    }
  }]);

  return LabelGroup;
}(_react.Component), _class.defaultProps = {
  extra: "",
  size: "",
  circular: false,
  tag: false,
  color: ""
}, _temp);
var Label = (_temp2 = _class2 = function (_Component2) {
  _inherits(Label, _Component2);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          size = _props2.size,
          as = _props2.as,
          children = _props2.children,
          image = _props2.image,
          color = _props2.color,
          pointing = _props2.pointing,
          basic = _props2.basic,
          tag = _props2.tag,
          extra = _props2.extra,
          corner = _props2.corner,
          ribbon = _props2.ribbon,
          attached = _props2.attached,
          horizontal = _props2.horizontal,
          floating = _props2.floating,
          circular = _props2.circular,
          text = _props2.text,
          otherProps = _objectWithoutProperties(_props2, ["size", "as", "children", "image", "color", "pointing", "basic", "tag", "extra", "corner", "ribbon", "attached", "horizontal", "floating", "circular", "text"]);

      var className = ("\n        " + (floating ? "floating" : "") + "\n        ui\n        " + size + "\n        " + extra + "\n        " + (image ? "image" : "") + "\n        " + color + "\n        " + (pointing ? typeof pointing === "string" ? pointing.search(/[lr]/) !== -1 ? pointing + " pointing" : "pointing " + pointing : "pointing" : "") + "\n        " + (tag ? "tag" : "") + "\n        " + (corner ? corner + " corner" : "") + "\n        " + (attached ? attached + " attached" : "") + "\n        " + (ribbon ? ribbon + " ribbon" : "") + "\n        " + (basic ? "basic" : "") + "\n        " + (circular ? "circular" : "") + "\n        " + (horizontal ? "horizontal" : "") + "\n        label\n        ").replace(/\s+/g, " ");
      return _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children, text);
    }
  }]);

  return Label;
}(_react.Component), _class2.Group = LabelGroup, _class2.Detail = LabelDetail, _class2.defaultProps = {
  as: "div",
  image: false,
  color: "",
  pointing: false,
  basic: false,
  extra: "",
  corner: "",
  tag: false,
  ribbon: "",
  attached: "",
  horizontal: false,
  floating: false,
  circular: false,
  size: "",
  text: ""
}, _temp2);
exports.default = Label;

//# sourceMappingURL=label.js.map