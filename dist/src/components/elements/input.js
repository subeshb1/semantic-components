"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../css/Input.css");

var _icon = require("./icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp = _class = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          extra = _props.extra,
          state = _props.state,
          disabled = _props.disabled,
          icon = _props.icon,
          loading = _props.loading,
          readOnly = _props.readOnly,
          iconPosition = _props.iconPosition,
          inverted = _props.inverted,
          size = _props.size,
          fluid = _props.fluid,
          transparent = _props.transparent,
          labeled = _props.labeled,
          action = _props.action,
          frontChildren = _props.frontChildren,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ["children", "extra", "state", "disabled", "icon", "loading", "readOnly", "iconPosition", "inverted", "size", "fluid", "transparent", "labeled", "action", "frontChildren", "style"]);

      var className = ("\n        ui\n        " + size + "\n        " + state + "\n        " + (disabled ? "disabled" : "") + "\n        " + (transparent ? "transparent" : "") + "\n        " + (fluid ? "fluid" : "") + "\n        " + extra + "\n        \n        " + (inverted ? "inverted" : "") + "\n        " + (labeled ? (typeof labeled === "string" ? labeled : "") + " labeled" : "") + "\n        " + (action ? (typeof action === "string" ? action : "") + " action" : "") + "\n        " + iconPosition + "\n        " + (loading || icon ? "icon" : "") + "\n        input\n        " + (loading ? (typeof loading === "string" ? loading : "") + " loading" : "") + "\n        ").replace(/\s+/g, " ");
      return _react2.default.createElement(
        "div",
        { className: className, style: style },
        frontChildren,
        _react2.default.createElement("input", Object.assign({
          disabled: disabled,
          readOnly: readOnly
        }, otherProps)),
        (typeof icon === "string" || loading) && _react2.default.createElement(_icon2.default, { name: icon }),
        children
      );
    }
  }]);

  return Input;
}(_react.Component), _class.defaultProps = {
  state: "", //States can be focus,loading,disabled,error,warning,success,
  disabled: false, //To make the input disabled
  type: "text",
  iconPosition: "",
  size: "",
  fluid: false,
  transparent: false,
  action: "",
  labeled: "",
  //Extras
  extra: "",
  frontChildren: undefined,
  style: {}
}, _temp);
exports.default = Input;

//# sourceMappingURL=input.js.map