"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widthMapper = exports.widthArray = exports.DisplayList = exports.mapPagesToLinks = exports.mapPagesToRoutes = exports.size = exports.social = exports.wide = exports.colorDef = exports.color = exports.reactComponent = exports.simpleComponent = exports.compose = exports.reduce = exports.map = exports.filter = exports.match = exports.replace = exports.trace = exports.split = exports.join = exports.curry = exports.reverse = exports.tail = exports.head = exports.toLower = exports.toUpper = undefined;

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import { toLower, curry, join, split, compose, replace } from "./basic-utils";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//Basic functions
var toUpper = exports.toUpper = function toUpper(str) {
  return str.toUpperCase();
};
var toLower = exports.toLower = function toLower(str) {
  return str.toLowerCase();
};
var head = exports.head = function head(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      x = _ref2[0];

  return x;
};
var tail = exports.tail = function tail(_ref3) {
  var _ref4 = _toArray(_ref3),
      x = _ref4[0],
      xs = _ref4.slice(1);

  return xs;
};
var reverse = exports.reverse = function reverse(x) {
  return x.reduceRight(function (h, t) {
    return h.concat(t);
  }, []);
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

var join = exports.join = curry(function (delim, arr) {
  return arr.join(delim);
});
var split = exports.split = curry(function (delim, str) {
  return str.split(delim);
});
var trace = exports.trace = curry(function (tag, x) {
  console.log(tag, x);
  return x;
});
var replace = exports.replace = curry(function (what, repStr, str) {
  return str.replace(what, repStr);
});
var match = exports.match = curry(function (what, str) {
  return str.match(what);
});
var filter = exports.filter = curry(function (f, arr) {
  return arr.filter(f);
});
var map = exports.map = curry(function (f, arr) {
  return arr.map(f);
});
var reduce = exports.reduce = curry(function (f, start, arr) {
  return arr.reduce(f, start);
});

//Compose

var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return fns.reduceRight(function (res, fn) {
      return [fn.call.apply(fn, [null].concat(_toConsumableArray(res)))];
    }, args)[0];
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
  return function (_ref5) {
    var _ref5$as = _ref5.as,
        as = _ref5$as === undefined ? defaultAs : _ref5$as,
        otherProps = _objectWithoutProperties(_ref5, ["as"]);

    return _react2.default.createElement(as, Object.assign({ className: className }, otherProps));
  };
};

exports.simpleComponent = simpleComponent;
var reactComponent = curry(function (as, props) {
  return function (_ref6) {
    var otherProps = _objectWithoutProperties(_ref6, []);

    return _react2.default.createElement(as, Object.assign({}, props, otherProps));
  };
});

exports.reactComponent = reactComponent;
var color = exports.color = ["", "primary", "secondary", "positive", "negative", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
var colorDef = exports.colorDef = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];

var wide = exports.wide = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
var social = exports.social = ["facebook", "twitter", "google plus", "vk", "linkedin", "instagram", "youtube"];

var size = exports.size = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];

var splitUpper = compose(split(/(?=[A-Z])/g), replace(/Page/gi, ""));
var toUrlSlug = compose(toLower, join("-"), splitUpper);
var toDisplay = compose(join(" "), splitUpper);
var mapPagesToRoutes = exports.mapPagesToRoutes = function mapPagesToRoutes(pages, path) {
  return (0, _entries2.default)(pages).filter(function (x) {
    return x[0] !== "default";
  }).map(function (page, index) {
    return _react2.default.createElement(_reactRouterDom.Route, {
      path: (path + "/" + toUrlSlug(page[0])).replace(/\/\//, "/"),
      component: page[1],
      key: index
    });
  });
};

var mapPagesToLinks = exports.mapPagesToLinks = function mapPagesToLinks(pages, url) {
  return Object.keys(pages).filter(function (x) {
    return x !== "default";
  }).map(function (page, index) {
    return {
      as: _reactRouterDom.Link,
      to: (url + "/" + toUrlSlug(page)).replace(/\/\//, "/"),
      children: toDisplay(page)
    };
  });
};

var DisplayList = exports.DisplayList = function DisplayList(_ref7) {
  var pages = _ref7.pages,
      url = _ref7.url,
      name = _ref7.name;

  return _react2.default.createElement(
    _.Container,
    null,
    _react2.default.createElement(
      _.Segment.Group,
      null,
      _react2.default.createElement(
        _.Segment,
        { color: "yellow" },
        _react2.default.createElement(
          _.Header,
          { as: "h1" },
          splitUpper(name),
          " Lists"
        )
      ),
      _react2.default.createElement(
        _.Segment,
        { color: "red" },
        _react2.default.createElement(_.List, {
          animated: true,
          selection: true,
          relaxed: "very",
          items: mapPagesToLinks(pages, url)
        })
      )
    )
  );
};

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