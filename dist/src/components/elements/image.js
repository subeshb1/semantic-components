"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImageGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ImageGroup = function ImageGroup(_ref) {
  var size = _ref.size,
      extra = _ref.extra,
      otherProps = _objectWithoutProperties(_ref, ["size", "extra"]);

  return _react2.default.createElement("div", Object.assign({ className: "ui " + size + " " + extra + " images" }, otherProps));
};

exports.ImageGroup = ImageGroup;
var Image = (_temp = _class = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          as = _props.as,
          wrapped = _props.wrapped,
          children = _props.children,
          state = _props.state,
          avatar = _props.avatar,
          bordered = _props.bordered,
          spaced = _props.spaced,
          rounded = _props.rounded,
          circular = _props.circular,
          fluid = _props.fluid,
          float = _props.float,
          extra = _props.extra,
          centered = _props.centered,
          verticalAlign = _props.verticalAlign,
          alt = _props.alt,
          otherProps = _objectWithoutProperties(_props, ["size", "as", "wrapped", "children", "state", "avatar", "bordered", "spaced", "rounded", "circular", "fluid", "float", "extra", "centered", "verticalAlign", "alt"]);

      var className = ("\n        ui\n        " + size + "\n        " + state + "\n        " + (avatar ? "avatar" : "") + "\n        " + (rounded ? "rounded" : "") + "\n        " + (circular ? "circular" : "") + "\n        " + (spaced ? (typeof spaced === "string" ? spaced : "") + " spaced" : "") + "\n        " + (centered ? "centered" : "") + "\n        " + (fluid ? "fluid" : "") + "\n        " + (bordered ? "bordered" : "") + "\n        " + (verticalAlign ? verticalAlign + " aligned" : "") + "\n        " + (float ? float + " floated" : "") + "\n        " + extra + "\n        image\n        ").replace(/\s+/g, " ");

      if (wrapped || children || as === "div" || as === "a") {
        var newAs = as === "img" ? "div" : as;

        var _alt = otherProps.alt,
            src = otherProps.src,
            crossOrigin = otherProps.crossOrigin,
            height = otherProps.height,
            width = otherProps.width,
            sizes = otherProps.sizes,
            srcSet = otherProps.srcSet,
            useMap = otherProps.useMap,
            ismap = otherProps.ismap,
            remainingProps = _objectWithoutProperties(otherProps, ["alt", "src", "crossOrigin", "height", "width", "sizes", "srcSet", "useMap", "ismap"]);

        return _react2.default.createElement(newAs, Object.assign({
          className: className
        }, remainingProps), children, _react2.default.createElement("img", Object.assign({
          alt: _alt,
          src: src,
          crossOrigin: crossOrigin,
          height: height,
          width: width,
          sizes: sizes,
          srcSet: srcSet,
          useMap: useMap,
          ismap: ismap
        }, {
          alt: _alt
        })));
      }
      return _react2.default.createElement("img", Object.assign({ className: className }, otherProps, { alt: alt }));
    }
  }]);

  return Image;
}(_react.Component), _class.Group = ImageGroup, _class.propTypes = {
  src: _propTypes2.default.string.isRequired
}, _class.defaultProps = {
  size: "",
  src: undefined,
  as: "img",
  state: "",
  avatar: false,
  circular: false,
  centered: false,
  verticalAlign: "",
  rounded: false,
  spaced: false,
  float: "",
  fluid: false,
  alt: "",

  extra: ""
}, _temp);
exports.default = Image;

//# sourceMappingURL=image.js.map