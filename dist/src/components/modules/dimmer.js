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

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dimmable = function Dimmable(_ref) {
  var as = _ref.as,
      blurring = _ref.blurring,
      show = _ref.show,
      extraProps = _ref.extraProps,
      otherProps = _objectWithoutProperties(_ref, ["as", "blurring", "show", "extraProps"]);

  return _react2.default.createElement(as, Object.assign({
    extra: ("\n      " + (blurring ? "blurring" : "") + "\n      dimmable\n      " + (show ? "dimmed" : "") + "\n      ").replace(/\s+/g, " ")
  }, extraProps, otherProps));
};
Dimmable.defaultProps = {
  as: "div",
  extraProps: {}
};
var Content = (0, _reactExtras.simpleComponent)("content");

var Dimmer = (_temp = _class = function (_Component) {
  _inherits(Dimmer, _Component);

  function Dimmer() {
    _classCallCheck(this, Dimmer);

    return _possibleConstructorReturn(this, (Dimmer.__proto__ || Object.getPrototypeOf(Dimmer)).apply(this, arguments));
  }

  _createClass(Dimmer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          simple = _props.simple,
          inverted = _props.inverted,
          page = _props.page,
          extra = _props.extra,
          show = _props.show,
          verticalAlign = _props.verticalAlign,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "simple", "inverted", "page", "extra", "show", "verticalAlign"]);

      var className = ("\n    ui\n    " + (page ? "page" : "") + "\n    " + (simple ? "simple" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (verticalAlign ? verticalAlign + " aligned" : "") + "\n    " + (show ? "active" : "") + "\n    " + extra + "\n    dimmer\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return Dimmer;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  extra: _propTypes2.default.string,
  page: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  simple: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  verticalAlign: _propTypes2.default.oneOf(["top", "bottom", "middle"])
}, _class.Dimmable = Dimmable, _class.Content = Content, _class.defaultProps = {
  as: "div",
  extra: ""
}, _temp);
exports.default = Dimmer;

//# sourceMappingURL=dimmer.js.map