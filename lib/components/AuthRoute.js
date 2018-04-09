'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var invariant = require('invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * A <AuthRoute> component is a special kind of <Route>.
 */

var AuthRoute = (function (_React$Component) {
  _inherits(AuthRoute, _React$Component);

  function AuthRoute() {
    _classCallCheck(this, AuthRoute);

    _get(Object.getPrototypeOf(AuthRoute.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AuthRoute, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return AuthRoute;
})(React.Component);

AuthRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool,
  auth: PropTypes.bool,
  passQuery: PropTypes.bool
};

AuthRoute.defaultProps = {
  handler: RouteHandler,
  auth: true,
  passQuery: false
};

module.exports = AuthRoute;