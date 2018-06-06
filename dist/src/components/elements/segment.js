"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SegmentGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SegmentGroup = exports.SegmentGroup = (_temp = _class = function (_Component) {
  _inherits(SegmentGroup, _Component);

  function SegmentGroup() {
    _classCallCheck(this, SegmentGroup);

    return _possibleConstructorReturn(this, (SegmentGroup.__proto__ || Object.getPrototypeOf(SegmentGroup)).apply(this, arguments));
  }

  _createClass(SegmentGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          content = _props.content,
          style = _props.style,
          horizontal = _props.horizontal,
          raised = _props.raised,
          stacked = _props.stacked,
          piled = _props.piled,
          compact = _props.compact,
          extra = _props.extra,
          otherProps = _objectWithoutProperties(_props, ["children", "content", "style", "horizontal", "raised", "stacked", "piled", "compact", "extra"]);

      var className = ("\n        ui\n        " + extra + "\n        " + (horizontal ? "horizontal" : "") + "\n        " + (raised ? "raised" : "") + "\n        " + (stacked ? "stacked" : "") + "\n        " + (piled ? "piled" : "") + "\n        " + (compact ? "compact" : "") + "\n        \n        segments\n        ").replace(/\s+/g, " ");
      return _react2.default.createElement(
        "div",
        Object.assign({ className: className, style: style }, otherProps),
        content,
        children
      );
    }
  }]);

  return SegmentGroup;
}(_react.Component), _class.defaultProps = {
  horizontal: false, //Make the segments appear horizontally
  raised: false, //Raised Segments
  stacked: false, //Stacked Segments
  piled: false, //Piled Segments
  compact: false, //Compact Segments
  extra: ""
}, _temp);
var Segment = (_temp2 = _class2 = function (_Component2) {
  _inherits(Segment, _Component2);

  function Segment() {
    _classCallCheck(this, Segment);

    return _possibleConstructorReturn(this, (Segment.__proto__ || Object.getPrototypeOf(Segment)).apply(this, arguments));
  }

  _createClass(Segment, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          content = _props2.content,
          children = _props2.children,
          raised = _props2.raised,
          stacked = _props2.stacked,
          piled = _props2.piled,
          vertical = _props2.vertical,
          state = _props2.state,
          inverted = _props2.inverted,
          attached = _props2.attached,
          padded = _props2.padded,
          compact = _props2.compact,
          color = _props2.color,
          emphasis = _props2.emphasis,
          circular = _props2.circular,
          clearing = _props2.clearing,
          float = _props2.float,
          textAlign = _props2.textAlign,
          basic = _props2.basic,
          extra = _props2.extra,
          style = _props2.style,
          otherProps = _objectWithoutProperties(_props2, ["content", "children", "raised", "stacked", "piled", "vertical", "state", "inverted", "attached", "padded", "compact", "color", "emphasis", "circular", "clearing", "float", "textAlign", "basic", "extra", "style"]);
      //class Name default `ui segment`


      var className = ("\n      ui\n      " + (raised ? "raised" : "") + "\n      " + (stacked ? (typeof stacked === "string" ? stacked : "") + " stacked" : "") + "\n      " + (piled ? "piled" : "") + "\n      " + (vertical ? "vertical" : "") + "\n      " + state + "\n      " + (inverted ? "inverted" : "") + "\n      " + (attached ? (typeof attached === "string" ? attached : "") + " attached" : "") + "\n      " + (padded ? (typeof padded === "string" ? padded : "") + " padded" : "") + "\n      " + (compact ? "compact" : "") + "\n      " + color + "\n      " + emphasis + "\n      " + (circular ? "circular" : "") + "\n      " + (clearing ? "clearing" : "") + "\n      " + (float ? float + " floated" : "") + "\n      " + (textAlign ? textAlign + " aligned" : "") + "\n      " + (basic ? "basic" : "") + "\n      " + extra + "\n      \n      segment\n      ").replace(/\s+/g, " ");
      return _react2.default.createElement(
        "div",
        Object.assign({ className: className, style: style }, otherProps),
        content,
        children
      );
    }
  }]);

  return Segment;
}(_react.Component), _class2.Group = SegmentGroup, _class2.defaultProps = {
  //types
  raised: false, //to raise the segment
  stacked: false, //Should be true or can have a string value "tall"
  piled: false, //Pile up segments
  vertical: false, //Segments align vertically
  //States
  state: "", //Can have value "disabled" or "loading"
  //Variations
  inverted: false, //invert the segment
  attached: false, //Can have value "top","bottom" or true. True denoting middle
  padded: false, //can be true or "very" passed denoting the padding
  compact: false, //To make compact segment
  color: "", //A segment can be colored
  emphasis: "", //Can have value "secondary" or "tertiary"
  circular: false, //A segment can be circular
  clearing: false, //A segment can clear floating content
  float: "", //A segment can appear left or right of other content
  textAlign: "", //The valid values are: 'left', 'right' and 'center'
  basic: false, //Segment will have no special formatting
  //Extra
  extra: "",
  style: {}
}, _temp2);
exports.default = Segment;

//# sourceMappingURL=segment.js.map