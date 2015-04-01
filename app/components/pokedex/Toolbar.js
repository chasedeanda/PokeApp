var React = require('react');
var pokeActions = require('../../actions/pokeActions.js');

var Toolbar = React.createClass({
	random:function(){
		// Generate random number between 1 and 779
		var uri = "api/v1/pokemon/" + Math.floor((Math.random() * 779) + 1);
		pokeActions.getPokemon(uri);
	},
	render:function(){
		return(
			<div className="btn btn-danger text-center col-md-12 col-xs-12 bottom10" onClick={this.random}>
				<span className="glyphicon glyphicon-random pointer"></span>
				<span className="left5">Random Pokemon</span>
			</div>
		)
	}
});

module.exports = Toolbar;