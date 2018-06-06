"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = (_temp = _class = function (_Component) {
  _inherits(Divider, _Component);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          text = _props.text,
          horizontal = _props.horizontal,
          vertical = _props.vertical,
          section = _props.section,
          clearing = _props.clearing,
          fitted = _props.fitted,
          hidden = _props.hidden,
          inverted = _props.inverted,
          otherProps = _objectWithoutProperties(_props, ["icon", "text", "horizontal", "vertical", "section", "clearing", "fitted", "hidden", "inverted"]);

      var className = ("\n    ui \n    " + (horizontal || icon || text ? "horizontal" : "") + "\n    " + (vertical ? "vertical" : "") + "\n    " + (section ? "section" : "") + "\n    " + (clearing ? "clearing" : "") + "\n    " + (hidden ? "hidden" : "") + "\n    " + (fitted ? "fitted" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    divider\n    " + (icon || text ? "header" : "") + "\n    ").replace(/\s+/g, " ");

      return _react2.default.createElement(
        "div",
        Object.assign({ className: className }, otherProps),
        icon && _react2.default.createElement("i", { className: icon + " icon" }),
        text
      );
    }
  }]);

  return Divider;
}(_react.Component), _class.defaultProps = {
  horizontal: false,
  vertical: false,
  icon: "",
  text: "",
  inverted: false,
  fitted: false,
  hidden: false,
  section: false,
  clearing: false
}, _temp);
exports.default = Divider;

//# sourceMappingURL=divider.js.map