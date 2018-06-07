"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderContent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderContent = exports.HeaderContent = (0, _reactExtras.simpleComponent)("content");
HeaderContent.displayName = "HeaderContent";
var Header = (_temp = _class = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          size = _props.size,
          sub = _props.sub,
          icon = _props.icon,
          extra = _props.extra,
          disabled = _props.disabled,
          dividing = _props.dividing,
          block = _props.block,
          color = _props.color,
          textAlign = _props.textAlign,
          float = _props.float,
          attached = _props.attached,
          text = _props.text,
          inverted = _props.inverted,
          children = _props.children,
          otherProps = _objectWithoutProperties(_props, ["as", "size", "sub", "icon", "extra", "disabled", "dividing", "block", "color", "textAlign", "float", "attached", "text", "inverted", "children"]);

      var className = ("\n        " + (sub ? "sub" : "ui") + "\n        " + size + "\n        " + (icon ? "icon" : "") + "\n        " + extra + "\n        " + (disabled ? "disabled" : "") + "\n        " + (dividing ? "dividing" : "") + "\n        " + (block ? "block" : "") + "\n        " + color + "\n        " + (textAlign ? textAlign === "justified" ? textAlign : textAlign + " aligned" : "") + "\n        " + (float ? float + " floated" : "") + "\n        " + (attached ? attached + " attached" : "") + "\n        " + (inverted ? " inverted" : "") + "\n        header\n    ").replace(/\s+/g, " ");

      return _react2.default.createElement(as, Object.assign({ className: className }, otherProps), text, children);
    }
  }]);

  return Header;
}(_react.Component), _class.Content = HeaderContent, _class.defaultProps = {
  as: "h3",
  size: "",
  sub: false,
  icon: false,
  extra: "",
  disabled: false,
  dividing: false,
  block: false,
  inverted: false,
  color: "",
  textAlign: "",
  float: "",
  attached: ""

}, _temp);

// const h1 = ({children,className}) => <h1></h2>

exports.default = Header;

//# sourceMappingURL=header.js.map