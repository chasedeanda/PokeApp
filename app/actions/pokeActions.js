var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var pokeUtils = require('../utils/pokeUtils.js');

var pokeActions = {
	getPokemon:function(url){
		pokeUtils.get(url).then(function(response){
			AppDispatcher.handleAction({
				actionType: appConstants.GET_CURRENT_POKEMON,
				data: response.data
			})
		})
	}
}

module.exports = pokeActions;