/* jshint -W084 */
var React = require('react');
var assign = require('react/lib/Object.assign');
var warning = require('./warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
    componentName = componentName || 'UnknownComponent';

    for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
            var error = propTypes[propName](props, propName, componentName);

            if (error instanceof Error)
                warning(false, error.message);
        }
    }
}

function createRouteOptions(props, tEvent) {
    var options = assign({}, props);

    if (tEvent && props.auth) {
        options.onEnter = tEvent.onEnter;
        options.onLeave = tEvent.onLeave;
    }

    return options;
}

function createRouteFromReactElement(element, triggerEvent) {
    if (!React.isValidElement(element))
        return;

    var type = element.type;
    var props = assign({}, type.defaultProps, element.props);

    if (type.propTypes)
        checkPropTypes(type.displayName, type.propTypes, props);

    if (type === DefaultRoute)
        return Route.createDefaultRoute(createRouteOptions(props, triggerEvent));

    if (type === NotFoundRoute)
        return Route.createNotFoundRoute(createRouteOptions(props, triggerEvent));

    if (type === Redirect)
        return Route.createRedirect(createRouteOptions(props, triggerEvent));

    return Route.createRoute(createRouteOptions(props, triggerEvent), function () {
        if (props.children) {
            var tEvent = false;
            if (triggerEvent && (triggerEvent.onEnter || triggerEvent.onLeave)) {
                tEvent = triggerEvent;
            } else {
                tEvent = {onEnter: props.onEnter, onLeave: props.onLeave};

            }
            createRoutesFromReactChildren(props.children, tEvent);
        }
    });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children, triggerEvent) {
    var routes = [];

    React.Children.forEach(children, function (child) {
        if (child = createRouteFromReactElement(child, triggerEvent))
            routes.push(child);
    });

    return routes;
}

module.exports = createRoutesFromReactChildren;
