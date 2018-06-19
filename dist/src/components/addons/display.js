"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.extractUnit = exports.filterRanges = exports.getInnerWidth = exports.shouldDisplay = exports.checkRange = exports.inRange = exports.LargeScreen = exports.Computer = exports.Tablet = exports.Mobile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactExtras = require("../lib/react-extras");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mobile = exports.Mobile = {
  min: 0,
  max: 768
};
var Tablet = exports.Tablet = {
  min: 768,
  max: 991
};
var Computer = exports.Computer = {
  min: 992,
  max: 1200
};
var LargeScreen = exports.LargeScreen = {
  min: 1200,
  max: Infinity
};

var inRange = exports.inRange = function inRange(range, value) {
  return value >= range.min && value <= range.max;
};

var checkRange = exports.checkRange = function checkRange(range, res) {
  return (
    //if null
    (0, _reactExtras.fromNullable)(range)
    // is un Range
    .map(function (x) {
      return inRange(x, res);
    })
    //return value
    .fold(function (x) {
      return true;
    }, function (x) {
      return x;
    })
  );
};

var shouldDisplay = exports.shouldDisplay = function shouldDisplay(show, visibleRange, res) {
  return (0, _reactExtras.fromNullable)(show)
  // if undefined return true
  .fold(function (x) {
    return (0, _reactExtras.Right)(true);
  }, function (x) {
    return (0, _reactExtras.Right)(x);
  })
  // check whether to display or not
  .map(function (x) {
    return x && checkRange(visibleRange, res);
  })
  //return value
  .fold(function (x) {
    return x;
  }, function (x) {
    return x;
  });
};

var getInnerWidth = exports.getInnerWidth = function getInnerWidth() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? window.screen.width : window.innerWidth
  );
};

var filterRanges = exports.filterRanges = function filterRanges(ranges, res) {
  return (
    //check if array or object
    (0, _reactExtras.fromNullable)(ranges instanceof Array ? ranges : undefined)
    //left object right array
    .fold(function (x) {
      return [ranges];
    }, function (x) {
      return x;
    })
    //filter
    .filter(function (x) {
      return inRange(x.range, res);
    })
  );
};

var extractUnit = exports.extractUnit = function extractUnit(ranges, res) {
  return (
    //checking if range is available
    (0, _reactExtras.fromNullable)(ranges)
    //filtering range according to res
    .map(function (x) {
      return filterRanges(x, res);
    })
    //Picking the last range
    .map(function (x) {
      return x.slice(-1);
    })
    //extracting
    .map(_reactExtras.head)
    //checking if undefined
    .map(function (x) {
      return (0, _reactExtras.fromNullable)(x);
    })
    //chaining Left or Right
    .chain(function (x) {
      return x;
    })
  );
};

var clone = function clone(children, props) {
  return _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, Object.assign({}, props));
  });
};
var Display = (_temp2 = _class = function (_Component) {
  _inherits(Display, _Component);

  function Display() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Display);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Display.__proto__ || Object.getPrototypeOf(Display)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      res: getInnerWidth()
    }, _this.resizeHandler = function () {
      _this.setState(function () {
        return { res: getInnerWidth() };
      });
    }, _this.componentDidMount = function () {
      window.addEventListener("resize", _this.resizeHandler, true);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener("resize", _this.resizeHandler, true);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          show = _props.show,
          visibleRange = _props.visibleRange,
          showRange = _props.showRange,
          render = _props.render,
          rangeProps = _props.rangeProps;
      var res = this.state.res;
      // THe main Display

      var mainDisplay = { range: visibleRange, show: show };
      //Filtering the available ranges
      var visibilityArray = (0, _reactExtras.fromNullable)(showRange).fold(
      //if undefined
      function (x) {
        return [mainDisplay];
      },
      //if defined
      function (x) {
        return [].concat(_toConsumableArray(filterRanges(x, res)), [mainDisplay]);
      });

      //Checking whether to display or not
      var display = visibilityArray.reduce(function (acc, dis) {
        return acc && shouldDisplay(dis.show, dis.range, res);
      }, true);

      return display ? //checking if render available
      extractUnit(render, res)
      //Left if  render, Right if no render
      .fold(function (x) {
        return (0, _reactExtras.Right)(rangeProps);
      }, function (x) {
        return (0, _reactExtras.Left)(x.render(children, res));
      })
      //Maps if no render
      .map(function (x) {
        return (
          //Same as above but for rangeProps
          extractUnit(x, res).fold(
          //if no range Props return child or null
          function (x) {
            return children || null;
          },
          //return proper range props
          function (x) {
            return clone(children, x.props);
          })
        );
      })
      //simple folding
      .fold(function (x) {
        return x;
      }, function (x) {
        return x;
      }) : //If none of above satisfies
      null;
    }
  }]);

  return Display;
}(_react.Component), _class.propTypes = {
  //Main
  show: _propTypes2.default.bool,
  visibleRange: _propTypes2.default.shape({
    min: _propTypes2.default.number.isRequired,
    max: _propTypes2.default.number.isRequired
  }),
  //Array of secondary
  showRange: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })), _propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })]),

  //different render in different ranges
  render: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })), _propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })]),
  // Passing different props to children in different ranges
  rangeProps: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })), _propTypes2.default.shape({
    range: _propTypes2.default.shape({
      min: _propTypes2.default.number.isRequired,
      max: _propTypes2.default.number.isRequired
    }).isRequired,
    show: _propTypes2.default.bool
  })])
}, _class.defaultProps = {}, _class.Mobile = Mobile, _class.Computer = Computer, _class.Tablet = Tablet, _class.LargeScreen = LargeScreen, _temp2);
exports.default = Display;

//# sourceMappingURL=display.js.map