var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _state = {
	currentPokemon: {}
}
var setCurrentPokemon = function(pokemon){
	// Save pokemon to localstorage
	localStorage.setItem('currentPokemon', JSON.stringify(pokemon));
	_state.currentPokemon = pokemon;
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
	}
})

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.GET_CURRENT_POKEMON:
			setCurrentPokemon(action.data);
			pokeStore.emit(CHANGE_EVENT);
		default:
			return true;
	}
});

module.exports = pokeStore;
