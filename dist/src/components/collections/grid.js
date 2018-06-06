"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GridRow = exports.GridColumn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridColumn = exports.GridColumn = (_temp = _class = function (_Component) {
  _inherits(GridColumn, _Component);

  function GridColumn() {
    _classCallCheck(this, GridColumn);

    return _possibleConstructorReturn(this, (GridColumn.__proto__ || Object.getPrototypeOf(GridColumn)).apply(this, arguments));
  }

  _createClass(GridColumn, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          color = _props.color,
          width = _props.width,
          float = _props.float,
          extra = _props.extra,
          visibility = _props.visibility,
          textAlign = _props.textAlign,
          mobile = _props.mobile,
          tablet = _props.tablet,
          computer = _props.computer,
          otherProps = _objectWithoutProperties(_props, ["as", "children", "color", "width", "float", "extra", "visibility", "textAlign", "mobile", "tablet", "computer"]);

      var className = ("\n    " + color + "\n    " + (width ? width + " wide" : "") + "\n    " + (float ? float + " floated" : "") + "\n    " + (visibility ? visibility + " only" : "") + "\n    " + (mobile ? (0, _reactExtras.widthMapper)(mobile) + " wide mobile" : "") + "\n    " + (tablet ? (0, _reactExtras.widthMapper)(tablet) + " wide tablet" : "") + "\n    " + (computer ? (0, _reactExtras.widthMapper)(computer) + " wide computer" : "") + "\n    " + (textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : "") + "\n    " + extra + "\n    column\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return GridColumn;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  color: _propTypes2.default.oneOf(_reactExtras.colorDef),
  width: _propTypes2.default.oneOf(_reactExtras.widthArray),
  float: _propTypes2.default.oneOf(["right", "left"]),
  textAlign: _propTypes2.default.oneOf(["center", "left", "right", "justified"]),
  visibility: _propTypes2.default.oneOf(["large screen", "computer", "mobile", "tablet"]),
  mobile: _propTypes2.default.oneOf(_reactExtras.widthArray),
  tablet: _propTypes2.default.oneOf(_reactExtras.widthArray),
  computer: _propTypes2.default.oneOf(_reactExtras.widthArray),
  extra: _propTypes2.default.string
}, _class.defaultProps = {
  as: "div",
  extra: ""
}, _temp);
var GridRow = exports.GridRow = (_temp2 = _class2 = function (_Component2) {
  _inherits(GridRow, _Component2);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          children = _props2.children,
          color = _props2.color,
          column = _props2.column,
          stretched = _props2.stretched,
          verticalAlign = _props2.verticalAlign,
          centered = _props2.centered,
          extra = _props2.extra,
          textAlign = _props2.textAlign,
          visibility = _props2.visibility,
          otherProps = _objectWithoutProperties(_props2, ["as", "children", "color", "column", "stretched", "verticalAlign", "centered", "extra", "textAlign", "visibility"]);

      var className = ("\n    " + color + "\n    " + (stretched ? "stretched" : "") + "\n    " + (column ? (0, _reactExtras.widthMapper)(column) + " column" : "") + "\n    " + (verticalAlign ? verticalAlign + " aligned" : "") + "\n    " + (centered ? "centered" : "") + "\n    " + (visibility ? visibility + " only" : "") + "\n    " + (textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : "") + "\n    " + extra + "\n    row\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return GridRow;
}(_react.Component), _class2.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  color: _propTypes2.default.oneOf(_reactExtras.colorDef),
  column: _propTypes2.default.oneOf(_reactExtras.widthArray),
  stretched: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  textAlign: _propTypes2.default.oneOf(["center", "left", "right", "justified"]),
  verticalAlign: _propTypes2.default.oneOf(["middle", "top", "bottom"]),
  visibility: _propTypes2.default.oneOf(["large screen", "computer", "mobile", "tablet"]),
  extra: _propTypes2.default.string
}, _class2.defaultProps = {
  as: "div"
}, _temp2);
var Grid = (_temp3 = _class3 = function (_Component3) {
  _inherits(Grid, _Component3);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _props3 = this.props,
          as = _props3.as,
          relaxed = _props3.relaxed,
          verticalAlign = _props3.verticalAlign,
          children = _props3.children,
          column = _props3.column,
          divided = _props3.divided,
          celled = _props3.celled,
          padded = _props3.padded,
          equal = _props3.equal,
          reversed = _props3.reversed,
          textAlign = _props3.textAlign,
          stackable = _props3.stackable,
          centered = _props3.centered,
          container = _props3.container,
          extra = _props3.extra,
          doubling = _props3.doubling,
          visibility = _props3.visibility,
          otherProps = _objectWithoutProperties(_props3, ["as", "relaxed", "verticalAlign", "children", "column", "divided", "celled", "padded", "equal", "reversed", "textAlign", "stackable", "centered", "container", "extra", "doubling", "visibility"]);

      var className = ("\n    ui\n    " + (column ? (0, _reactExtras.widthMapper)(column) + " column" : "") + "\n    " + (stackable ? "stackable" : "") + "\n    " + (divided ? (typeof divided === "string" ? divided : "") + " divided" : "") + "\n    " + (verticalAlign ? verticalAlign + " aligned" : "") + "\n    " + (celled ? (typeof celled === "string" ? celled : "") + " celled" : "") + "\n    " + (equal ? "equal width" : "") + "\n    " + (padded ? (typeof padded === "string" ? padded : "") + " padded" : "") + "\n    " + (relaxed ? (typeof relaxed === "string" ? relaxed : "") + " relaxed" : "") + "\n    " + (textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : "") + "\n    " + (centered ? "centered" : "") + "\n    " + (doubling ? "doubling" : "") + "\n    " + (reversed ? reversed + " reversed" : "") + "\n    " + (visibility ? visibility + " only" : "") + "\n    " + extra + "\n    grid\n    " + (container ? "container" : "") + "\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return Grid;
}(_react.Component), _class3.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  column: _propTypes2.default.oneOf(_reactExtras.widthArray),
  divided: _propTypes2.default.oneOf([true, "vertically", "horizontally"]),
  celled: _propTypes2.default.oneOf([true, "internally"]),
  equal: _propTypes2.default.bool,
  padded: _propTypes2.default.oneOf([true, "vertically", "horizontally"]),
  relaxed: _propTypes2.default.oneOf([true, "very"]),
  centered: _propTypes2.default.bool,
  textAlign: _propTypes2.default.oneOf(["center", "left", "right", "justified"]),
  verticalAlign: _propTypes2.default.oneOf(["middle", "top", "bottom"]),
  stackable: _propTypes2.default.bool,
  doubling: _propTypes2.default.bool,
  reversed: _propTypes2.default.oneOf(["computer", "mobile", "tablet", "computer vertically", "mobile vertically", "tablet vertically"]),
  visibility: _propTypes2.default.oneOf(["large screen", "computer", "mobile", "tablet"]),
  container: _propTypes2.default.bool,
  extra: _propTypes2.default.string
}, _class3.defaultProps = {
  as: "div"
}, _class3.Column = GridColumn, _class3.Row = GridRow, _temp3);
exports.default = Grid;

//# sourceMappingURL=grid.js.map