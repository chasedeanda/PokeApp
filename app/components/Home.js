var React = require('react');
var Pokedex = require('./pokedex/Pokedex.js');
var pokeActions = require('../actions/pokeActions.js');
var pokeStore = require('../stores/pokeStore.js');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render:function(){
		return(
			<div className="container">
				<div className="col-md-8 col-sm-10 col-xs-12 center-block">
					Welcome to the home page! View our <Link to="pokedex">pokedex</Link> or <Link to="register">create an account.</Link>
				</div>
			</div>
		)
	}
});

module.exports = Home;