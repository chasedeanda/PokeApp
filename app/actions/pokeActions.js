var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var pokeUtils = require('../utils/pokeUtils.js');
var pokeStore = require('../stores/pokeStore.js');
var $ = require('jquery');

var pokeActions = {
	getPokemon:function(url){
		pokeActions.loading(true);
		var data = {};
		pokeUtils.get(url).then(function(response){
			data = response.data;
			pokeActions.getImage(response.data.sprites[0].resource_uri);
			pokeActions.getDescription(response.data.descriptions[0].resource_uri);
		}).then(function(){
			debugger
			AppDispatcher.handleAction({
				actionType: appConstants.GET_CURRENT_POKEMON,
				data: data
			})
			// pokeActions.loading(false);
		}).catch(function (response) {
			console.log('getPokemom',response);
		});
	},
	getImage:function(resource){
		pokeUtils.get(resource).then(function(response){
			AppDispatcher.handleAction({
				actionType: appConstants.GET_POKE_IMAGE,
				data: response.data.image
			})
		}).then(function(){
			// FIXME: How can I update this after all of the stores
			// have been updated? This only works because I know
			// that the image store gets updated last, but
			// what if I didn't know?
			// debugger
			pokeActions.loading(false);
		}).catch(function (response) {
			console.log('getImage',response);
		})
	},
	getDescription:function(resource){
		pokeUtils.get(resource).then(function(response){
			AppDispatcher.handleAction({
				actionType: appConstants.GET_POKE_DESC,
				data: response.data.description
			})
		}).catch(function (response) {
			console.log('getDesc',response);
		})
	},
	loading:function(isLoading){
		AppDispatcher.handleAction({
			actionType: appConstants.LOADING,
			data: isLoading
		})
	},
	error:function(err){
		AppDispatcher.handleAction({
			actionType: appConstants.NOT_FOUND_ERROR,
			data: err
		})
	}
}

module.exports = pokeActions;