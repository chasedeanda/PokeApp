var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

/*Include Main Layout component*/
var Layout = require('../components/Layout.js');
var Home = require('../components/Home.js');
var Register = require('../components/Register.js');
var PokedexHome = require('../components/pokedex/PokedexHome.js');

module.exports = (
	<Route name="app" path="/" handler={Layout}>
		<DefaultRoute handler={Home}/>
		<Route name="home" handler={Home} />
		<Route name="register" handler={Register} />
		<Route name="pokedex" handler={PokedexHome} />
	</Route>
);