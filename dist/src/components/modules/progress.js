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

var _display = require("../addons/display");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = (_temp = _class = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          extra = _props.extra,
          indicating = _props.indicating,
          label = _props.label,
          percent = _props.percent,
          progress = _props.progress,
          state = _props.state,
          attached = _props.attached,
          inverted = _props.inverted,
          active = _props.active,
          fixed = _props.fixed,
          color = _props.color,
          size = _props.size,
          ranges = _props.ranges,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "extra", "indicating", "label", "percent", "progress", "state", "attached", "inverted", "active", "fixed", "color", "size", "ranges"]);

      var rangeColor = (0, _display.extractUnit)(ranges, percent).fold(function (x) {
        return x;
      }, function (x) {
        return x.color;
      });
      var className = ("\n    ui\n    " + (indicating ? "indicating" : "") + "\n    " + (active ? "active" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (attached ? attached + " attached" : "") + "\n    " + (color || "") + "\n    " + (rangeColor || "") + "\n    " + (size || "") + "\n    " + extra + "\n    progress\n    " + (state || "") + "\n    ").replace(/\s+/g, " ");

      var newChild = _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          {
            className: "bar",
            style: Object.assign({
              width: percent % 105 + "%",
              transition: "width 0.3s ease,background-color 1s ease"
            }, fixed ? {
              top: 0,
              left: 0,
              position: "fixed",
              height: 3
            } : {})
          },
          _react2.default.createElement(
            "div",
            { className: "progress" },
            progress
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "label" },
          label
        )
      );
      var renderElement = _react2.default.createElement(as, Object.assign({
        className: className,
        "data-percent": "" + percent,
        style: fixed ? {
          top: 0,
          left: 0,
          position: "fixed",
          zIndex: 10000,
          width: "100%"
        } : {}
      }, otherProps), newChild);
      return renderElement;
    }
  }]);

  return Progress;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  extra: _propTypes2.default.string,
  percent: _propTypes2.default.number,
  label: _propTypes2.default.string,
  indicating: _propTypes2.default.bool,
  progress: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  state: _propTypes2.default.oneOf(["error", "success", "warning"]),
  inverted: _propTypes2.default.bool,
  attached: _propTypes2.default.oneOf(["top", "bottom"]),
  size: _propTypes2.default.oneOf(["tiny", "small", "large", "big"]),
  color: _propTypes2.default.oneOf(_reactExtras.colorDef),
  fixed: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  extra: "",
  percent: 0
}, _temp);
exports.default = Progress;

//# sourceMappingURL=progress.js.map