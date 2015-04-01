var React = require('react');
var pokeUtils = require('../../utils/pokeUtils.js');
var pokeActions = require('../../actions/pokeActions.js');

var Pokedex = React.createClass({
	getInitialState:function(){
		return{
			pokedex: []
		}
	},
	handleClick:function(e){
		var pokeUri = e.currentTarget.getAttribute('data-resourceuri');
		pokeActions.getPokemon(pokeUri);
		// window.scrollTo(0,0);
	},
	componentWillMount:function(){
		pokeUtils.getPokedex().then(function(response){
			this.setState({
				pokedex: response.data.pokemon
			})
		}.bind(this));
	},
	render:function(){
		/* NEED TO PULL IN POKEMON DATA HERE SOMEHOW */
		var pokedexList = this.state.pokedex.map(function(pokemonRef, index){
			return(
				<li className="list-group-item poke-item" key={index} onClick={this.handleClick} data-resourceuri={pokemonRef.resource_uri}>
					<div className="pull-left col-md-4">
						<span>{pokemonRef.name}</span>
					</div>
					<div className="pull-right text-right col-md-8">
						<span>#{index + 1}</span>
					</div>
				</li>
			)
			
		}.bind(this));
		return(
			<ul className="list-group">
				{pokedexList}
			</ul>
		)
	}
});

module.exports = Pokedex;

/*
Object {name: "rattata", resource_uri: "api/v1/pokemon/19/"}
*/