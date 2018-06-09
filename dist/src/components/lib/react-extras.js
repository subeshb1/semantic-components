"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widthMapper = exports.widthArray = exports.size = exports.social = exports.wide = exports.colorDef = exports.color = exports.reactComponent = exports.simpleComponent = exports.curry = exports.tryCatch = exports.fromNullable = exports.head = exports.Left = exports.Right = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Right = exports.Right = function Right(x) {
  return {
    chain: function chain(f) {
      return f(x);
    },
    map: function map(f) {
      return Right(f(x));
    },
    fold: function fold(f, g) {
      return g(x);
    },
    toString: function toString() {
      return "Right(" + x + ")";
    }
  };
};
// Does not perform any action
var Left = exports.Left = function Left(x) {
  return {
    chain: function chain(f) {
      return Left(x);
    },
    map: function map(f) {
      return Left(x);
    },
    fold: function fold(f, g) {
      return f(x);
    },
    toString: function toString() {
      return "Right(" + x + ")";
    }
  };
};

var head = exports.head = function head(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      x = _ref2[0];

  return x;
};
var fromNullable = exports.fromNullable = function fromNullable(x) {
  return x != null ? Right(x) : Left(x);
};

var tryCatch = exports.tryCatch = function tryCatch(f) {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};
//Curry
var curry = exports.curry = function curry(fn) {
  var resLength = fn.length;
  return function $curry() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length < resLength ? $curry.bind.apply($curry, [null].concat(args)) : fn.call.apply(fn, [null].concat(args));
  };
};
/** This function returns a function that makes a simple React Component

 *

 * @param {string} className

 * @param {[string , object]} defaultAs

 * @returns {function} - A Simple React Component Builder

 */
var simpleComponent = function simpleComponent(className) {
  var defaultAs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  return function (_ref3) {
    var _ref3$as = _ref3.as,
        as = _ref3$as === undefined ? defaultAs : _ref3$as,
        otherProps = _objectWithoutProperties(_ref3, ["as"]);

    return _react2.default.createElement(as, Object.assign({ className: className }, otherProps));
  };
};

exports.simpleComponent = simpleComponent;
var reactComponent = curry(function (as, props) {
  return function (_ref4) {
    var otherProps = _objectWithoutProperties(_ref4, []);

    return _react2.default.createElement(as, Object.assign({}, props, otherProps));
  };
});

exports.reactComponent = reactComponent;
var color = exports.color = ["", "primary", "secondary", "positive", "negative", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
var colorDef = exports.colorDef = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];

var wide = exports.wide = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
var social = exports.social = ["facebook", "twitter", "google plus", "vk", "linkedin", "instagram", "youtube"];

var size = exports.size = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];

var widthArray = exports.widthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
var widths = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five",
  six: "six",
  seven: "seven",
  eight: "eight",
  nine: "nine",
  ten: "ten",
  eleven: "eleven",
  twelve: "twelve",
  thirteen: "thirteen",
  fourteen: "fourteen",
  fifteen: "fifteen",
  sixteen: "sixteen",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
var widthMapper = exports.widthMapper = function widthMapper(x) {
  return widths[x] ? widths[x] : "one";
};

//# sourceMappingURL=react-extras.js.map