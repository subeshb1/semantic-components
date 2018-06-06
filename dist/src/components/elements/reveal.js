"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RevealVisible = exports.RevealHidden = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RevealHidden = exports.RevealHidden = function RevealHidden(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "hidden content" },
    children
  );
};
var RevealVisible = exports.RevealVisible = function RevealVisible(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    "div",
    { className: "visible content" },
    children
  );
};
var Reveal = (_temp = _class = function (_Component) {
  _inherits(Reveal, _Component);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          show = _props.show,
          animation = _props.animation,
          instant = _props.instant,
          extra = _props.extra,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "show", "animation", "instant", "extra"]);

      var className = ("\n    ui\n    " + (show !== undefined ? show ? "active" : "disabled" : "") + "\n    " + (instant ? "instant" : "") + "\n    " + animation + "\n    " + extra + "\n    reveal\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return Reveal;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  animation: _propTypes2.default.oneOf(["move", "fade", "rotate", 'move right', 'move up', 'move down', 'rotate left', 'slide', "slide masked"]),
  instant: _propTypes2.default.bool,
  show: _propTypes2.default.oneOf([undefined, true, false]),
  extra: _propTypes2.default.string
}, _class.defaultProps = {
  as: "div",
  animation: "fade",
  instant: false,
  show: undefined,
  extra: ""
}, _class.Hidden = RevealHidden, _class.Visible = RevealVisible, _temp);
exports.default = Reveal;

//# sourceMappingURL=reveal.js.map