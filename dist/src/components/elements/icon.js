"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconGroup = exports.IconGroup = (_temp = _class = function (_Component) {
  _inherits(IconGroup, _Component);

  function IconGroup() {
    _classCallCheck(this, IconGroup);

    return _possibleConstructorReturn(this, (IconGroup.__proto__ || Object.getPrototypeOf(IconGroup)).apply(this, arguments));
  }

  _createClass(IconGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          extra = _props.extra,
          size = _props.size,
          otherProps = _objectWithoutProperties(_props, ["extra", "size"]);

      var className = ("\n        " + extra + "\n        " + size + "\n        icons\n        ").replace(/\s+/g, " ");

      return _react2.default.createElement("i", Object.assign({ className: className }, otherProps));
    }
  }]);

  return IconGroup;
}(_react.Component), _class.defaultProps = {
  extra: "",
  size: ""
}, _temp);
var Icon = (_temp2 = _class2 = function (_Component2) {
  _inherits(Icon, _Component2);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          state = _props2.state,
          name = _props2.name,
          fitted = _props2.fitted,
          size = _props2.size,
          link = _props2.link,
          flipped = _props2.flipped,
          rotated = _props2.rotated,
          color = _props2.color,
          circular = _props2.circular,
          bordered = _props2.bordered,
          inverted = _props2.inverted,
          extra = _props2.extra,
          corner = _props2.corner,
          otherProps = _objectWithoutProperties(_props2, ["state", "name", "fitted", "size", "link", "flipped", "rotated", "color", "circular", "bordered", "inverted", "extra", "corner"]);

      var className = ("\n        " + (corner ? (typeof corner === "string" ? corner : "") + " corner" : "") + "\n        " + extra + "\n        " + (fitted ? "fitted" : "") + "\n        " + (size ? size : "") + "\n        " + name + "\n        " + (link ? "link" : "") + "\n        " + (flipped ? typeof flipped === "string" ? flipped + " flipped" : "horizontally flipped" : "") + "\n        " + (rotated ? typeof rotated === "string" ? rotated + " rotated" : "clockwise rotated" : "") + "\n        " + (circular ? "circular" : "") + "\n        " + (bordered ? "bordered" : "") + "\n        " + color + "\n        " + (inverted ? "inverted" : "") + "\n        " + state + "\n        icon\n        ").replace(/\s+/g, " ");
      return _react2.default.createElement("i", Object.assign({ className: className }, otherProps));
    }
  }]);

  return Icon;
}(_react.Component), _class2.Group = IconGroup, _class2.defaultProps = {
  state: "",
  fitted: false,
  size: "",
  link: false,
  flipped: false,
  rotated: false,
  circular: false,
  bordered: false,
  color: "",
  inverted: false,
  extra: "",
  corner: false
}, _temp2);
exports.default = Icon;

//# sourceMappingURL=icon.js.map