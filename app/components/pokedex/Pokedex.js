var React = require('react');
var pokeActions = require('../../actions/pokeActions.js');
var pokeStore = require('../../stores/pokeStore.js');
var pokeUtils = require('../../utils/pokeUtils.js');
var Pokemon = require('./Pokemon.js');

var Pokedex = React.createClass({
	getInitialState:function(){
		return{
			pokedex: pokeStore.getPokedex().pokemon
		}
	},	
	componentWillMount:function(){
		pokeActions.getPokedex();
		pokeStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
		pokeStore.removeChangeListener(this._onChange);
	},
	_onChange:function(){
		this.setState({
			pokedex: pokeStore.getPokedex().pokemon
		})
	},
	render:function(){
		debugger
		/* NEED TO PULL IN POKEMON DATA HERE SOMEHOW */
		var description = "Description Here";
		var pokedexList = this.state.pokedex.map(function(pokemonRef, index){
			return(
				<li className="list-group-item" key={index}>
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
			<div className="container">
				<div className="col-md-10 center-block">
					<Pokemon />
					<ul className="list-group">
						{pokedexList}
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = Pokedex;

/*
Object {name: "rattata", resource_uri: "api/v1/pokemon/19/"}


pokeUtils.getPokemon(pokemonRef.resource_uri).then(function(response){
				return(
				<PokedexItem className="list-group-item" key={index} pokemon={response.data} description={description} />
				)	
			});
*/