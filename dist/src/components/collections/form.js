"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormGroup = exports.FormField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = exports.FormField = (_temp = _class = function (_Component) {
  _inherits(FormField, _Component);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          children = _props.children,
          width = _props.width,
          inline = _props.inline,
          required = _props.required,
          error = _props.error;

      var className = ("\n    " + (required ? "required" : "") + "\n    " + (inline ? "inline" : "") + "\n    " + (width ? width + " wide" : "") + "\n    " + (error ? "error" : "") + "\n    field\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, { className: className }, children);
      return renderElement;
    }
  }]);

  return FormField;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  inline: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  width: "",
  required: false,
  error: false
}, _temp);
var FormGroup = exports.FormGroup = (_temp2 = _class2 = function (_Component2) {
  _inherits(FormGroup, _Component2);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          children = _props2.children,
          widths = _props2.widths,
          inline = _props2.inline;

      var className = ("\n    " + (inline ? "inline" : "") + "\n    " + (widths ? widths : "") + "\n    fields\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, { className: className }, children);
      return renderElement;
    }
  }]);

  return FormGroup;
}(_react.Component), _class2.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  inline: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  required: _propTypes2.default.bool
}, _class2.defaultProps = {
  as: "div",
  widths: ""
}, _temp2);
var Form = (_temp3 = _class3 = function (_Component3) {
  _inherits(Form, _Component3);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _props3 = this.props,
          as = _props3.as,
          children = _props3.children,
          otherProps = _objectWithoutProperties(_props3, ["as", "children"]);

      var className = "\n    ui \n    form\n    ".replace(/\s+/g, " ");
      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), children);
      return renderElement;
    }
  }]);

  return Form;
}(_react.Component), _class3.Field = FormField, _class3.Group = FormGroup, _class3.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
}, _class3.defaultProps = {
  as: "form"
}, _temp3);
exports.default = Form;

//# sourceMappingURL=form.js.map