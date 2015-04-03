var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var pokeActions = require('../actions/pokeActions.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var imageStore = require('./imageStore.js');
var descriptionStore = require('./descriptionStore.js');

var CHANGE_EVENT = 'change';

var _state = {
	currentPokemon: {},
	loading: true
}
var setCurrentPokemon = function(pokemon){
	// Save pokemon to localstorage
	localStorage.setItem('currentPokemon', JSON.stringify(pokemon));
	_state.currentPokemon = pokemon;
}
var updateLoading = function(isLoading){
	_state.loading = isLoading;
}
var pokeStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener:function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener:function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	getCurrentPokemon:function(){
		return _state.currentPokemon;
	},
	isLoading:function(){
		return _state.loading;
	}
})

pokeStore.dispatchToken = AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.GET_CURRENT_POKEMON:
			setCurrentPokemon(action.data);
			pokeStore.emit(CHANGE_EVENT);
			break;
		case appConstants.NOT_FOUND_ERROR:
			// Handle error
			console.log("Pokemon doesn't exist!");
			// pokeStore.emit(CHANGE_EVENT);
			break;
		case appConstants.LOADING:
			updateLoading(action.data);
			pokeStore.emit(CHANGE_EVENT);
		default:
			return true;
	}
});

module.exports = pokeStore;
