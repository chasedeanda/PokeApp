var React = require('react');
var RouteHandler = require('../config/routes.js');

var Layout = React.createClass({
	render:function(){
		return(
			<div className="well">
				<RouteHandler/>
			</div>
		)
	}
});

module.exports = Layout;