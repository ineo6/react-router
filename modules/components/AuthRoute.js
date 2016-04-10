var React = require('react');
var invariant = require('invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * A <AuthRoute> component is a special kind of <Route>.
 */
class AuthRoute extends React.Component {

  render() {
    invariant(
      false,
      '%s elements are for router configuration only and should not be rendered',
      this.constructor.name
    );
  }

}


AuthRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool,
  auth:PropTypes.bool
};

AuthRoute.defaultProps = {
  handler: RouteHandler,
  auth:true
};

module.exports = AuthRoute;
