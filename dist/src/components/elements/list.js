"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqid = require("uniqid");

var _uniqid2 = _interopRequireDefault(_uniqid);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//List Item Component

var ListContent = function ListContent(_ref) {
  var as = _ref.as,
      textAlign = _ref.textAlign,
      right = _ref.right,
      otherProps = _objectWithoutProperties(_ref, ["as", "textAlign", "right"]);

  return _react2.default.createElement(as, Object.assign({
    className: (textAlign ? textAlign + " aligned" : "") + " " + (right ? "right floated" : "") + " content"
  }, otherProps));
};
ListContent.defaultProps = {
  as: "div"
};

var ListItem = exports.ListItem = (_temp = _class = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          as = _props.as,
          active = _props.active,
          otherProps = _objectWithoutProperties(_props, ["as", "active"]);

      var className = ("\n       " + (active ? "active" : "") + "\n       item\n        ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps));
      return renderElement;
    }
  }]);

  return ListItem;
}(_react.Component), _class.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  active: _propTypes2.default.bool
}, _class.defaultProps = {
  as: "div",
  active: false
}, _temp);
var List = (_temp2 = _class2 = function (_Component2) {
  _inherits(List, _Component2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          bulleted = _props2.bulleted,
          ordered = _props2.ordered,
          nested = _props2.nested,
          link = _props2.link,
          items = _props2.items,
          children = _props2.children,
          horizontal = _props2.horizontal,
          inverted = _props2.inverted,
          selection = _props2.selection,
          animated = _props2.animated,
          relaxed = _props2.relaxed,
          celled = _props2.celled,
          size = _props2.size,
          divided = _props2.divided,
          extra = _props2.extra,
          aligned = _props2.aligned,
          otherProps = _objectWithoutProperties(_props2, ["as", "bulleted", "ordered", "nested", "link", "items", "children", "horizontal", "inverted", "selection", "animated", "relaxed", "celled", "size", "divided", "extra", "aligned"]);

      var className = ("\n    " + (!nested ? "ui" : "") + "\n    " + size + "\n    " + extra + "\n    " + (aligned ? aligned + " aligned" : "") + "\n    " + (inverted ? "inverted" : "") + "\n    " + (celled ? "celled" : "") + "\n    " + (horizontal ? "horizontal" : "") + "\n    " + (selection ? "selection" : "") + "\n    " + (animated ? "animated" : "") + "\n    " + (relaxed ? (typeof relaxed === "string" ? relaxed : "") + " relaxed" : "") + "\n    " + (bulleted ? "bulleted" : "") + "\n    " + (ordered ? "ordered" : "") + "\n    " + (link ? "link" : "") + "\n    " + (divided ? "divided" : "") + "\n    list\n    ").replace(/\s+/g, " ");

      var renderElement = _react2.default.createElement(as, Object.assign({ className: className }, otherProps), items && items.map(function (_ref2) {
        var children = _ref2.children,
            key = _ref2.key,
            others = _objectWithoutProperties(_ref2, ["children", "key"]);

        return _react2.default.createElement(ListItem, Object.assign({}, others, { key: key || (0, _uniqid2.default)() }), children);
      }), children);
      return renderElement;
    }
  }]);

  return List;
}(_react.Component), _class2.Item = ListItem, _class2.Description = (0, _reactExtras.simpleComponent)("description"), _class2.Content = ListContent, _class2.Header = (0, _reactExtras.simpleComponent)("header"), _class2.propTypes = {
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  bulleted: _propTypes2.default.bool,
  ordered: _propTypes2.default.bool,
  nested: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]).isRequired
  }).isRequired),
  horizontal: _propTypes2.default.bool,
  inverted: _propTypes2.default.bool,
  selection: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  relaxed: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  celled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["tiny", "small", "mini", "large", "big", "huge", "massive", ""]),
  divided: _propTypes2.default.bool,
  extra: _propTypes2.default.string,
  aligned: _propTypes2.default.oneOf(["bottom", "top", "middle", ""])
}, _class2.defaultProps = {
  as: "div",
  bulleted: false,
  ordered: false,
  nested: false,
  link: false,
  horizontal: false,
  inverted: false,
  selection: false,
  animated: false,
  relaxed: false,
  celled: false,
  size: "",
  divided: false,
  extra: "",
  aligned: ""
}, _temp2);
exports.default = List;

List.Description.displayName = "List.Description";
List.Header.displayName = "List.Header";
List.Content.displayName = "List.Content";

//TO-DO - Remove u4()

//# sourceMappingURL=list.js.map