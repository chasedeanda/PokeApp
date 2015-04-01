var React = require('react');
var Pokemon = require('./Pokemon.js');
var Pokedex = require('./Pokedex.js');
var Toolbar = require('./Toolbar.js');
var pokeUtils = require('../../utils/pokeUtils.js');

var PokedexHome = React.createClass({
	render:function(){
		return(
			<div className="container">
				<div className="col-md-12 center-block clearfix">
					<Toolbar />
				</div>
				<div className="col-md-12 main-container clearfix">
					<div className="col-md-6 nopadding clearfix">
							<Pokemon />
					</div>
					<div className="col-md-6 nopadding pokedex-container">
						<h3 className="text-center">National Pokedex</h3>
						<Pokedex/>
					</div>
				</div>
				<div className="col-md-12 text-center bottom50">
					<span className="block">App by Chase DeAnda &copy; 2015</span>{' '}
					<span><a href="https://github.com/chasedeanda/PokeApp" ><span className="glyphicon glyphicon-link"></span> View on GitHub</a></span>
				</div>
			</div>
		)
	}
});

module.exports = PokedexHome;