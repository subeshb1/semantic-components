"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

//# sourceMappingURL=basic-utils.js.map