var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var pokeUtils = require('../utils/pokeUtils.js');

var pokeActions = {
	getPokedex:function(){
		pokeUtils.getPokedex().then(function(response){
			AppDispatcher.handleAction({
				actionType: appConstants.GET_POKEDEX,
				data: response.data
			})
		})
	},
	getPokemon:function(pokemon){
		debugger
		var url = pokemon.resource_ari;
		pokeUtils.getPokemon(url).then(function(response){
			AppDispatcher.handleAction({
				actionType: appConstants.GET_CURRENT_POKEMON,
				data: response.data
			})
		})
	}
}

module.exports = pokeActions;