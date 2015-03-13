var React = require('react');
var Routes = require('./config/routes.js');
var Router = require('react-router');

Router.run(Routes,function(Handler){
	React.render(<Handler />, document.getElementById('app'));
});