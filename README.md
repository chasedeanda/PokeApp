## PokeApp 
###### Built with [PokeApi](http://pokeapi.co/)/Webpack/React/Flux/Bootstrap
![](https://github.com/chasedeanda/PokeApp/blob/master/app/assets/images/Desktop-2.png)

### Mobile Responsiveness
![](https://github.com/chasedeanda/PokeApp/blob/master/app/assets/images/Mobile-View.png)

### Features
  1. Full National Pokedex
  2. Pokemon Profile
    * Current Image and any alternate images from previous games
    * Current Description and any alternate descriptions from previous games
    * Types
    * Base Stats
    * Abilities
    * Egg Groups
    * Moves List
  3. Random Pokemon Generator

### Code Preview
```javascript
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
	},
	componentWillMount:function(){
		pokeUtils.getPokedex().then(function(response){
			this.setState({
				pokedex: response.data.pokemon
			})
		}.bind(this));
	},
	render:function(){
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
