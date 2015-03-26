var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Nav = require('./Nav.js');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Layout = React.createClass({
	render:function(){
		return(
			<div>
				<Nav />
				<ReactCSSTransitionGroup transitionName="example">
					<RouteHandler />
				</ReactCSSTransitionGroup>
			</div>
		)
	}
});

module.exports = Layout;