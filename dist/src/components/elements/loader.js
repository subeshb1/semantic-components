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

var Loader = (_temp = _class = function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          state = _props.state,
          size = _props.size,
          inline = _props.inline,
          inverted = _props.inverted,
          content = _props.content,
          children = _props.children,
          indeterminate = _props.indeterminate,
          extra = _props.extra,
          as = _props.as,
          otherProps = _objectWithoutProperties(_props, ["state", "size", "inline", "inverted", "content", "children", "indeterminate", "extra", "as"]);

      var className = ("\n        ui \n        " + extra + " \n        " + size + "\n        " + (inline ? (typeof inline === "string" ? inline : "") + " inline" : "") + "\n        " + (inverted ? "inverted" : "") + "\n        " + (indeterminate ? "indeterminate" : "") + "\n        " + state + "\n        " + (content || children ? "text" : "") + "\n        loader\n    ").replace(/\s+/g, " ");
      return _react2.default.createElement(as, Object.assign({ className: className }, otherProps), content, children);
    }
  }]);

  return Loader;
}(_react.Component), _class.defaultProps = {
  size: "",
  state: "",
  inline: "",
  inverted: false,
  indeterminate: false,
  extra: "",
  as: "div"
}, _temp);
exports.default = Loader;

//# sourceMappingURL=loader.js.map