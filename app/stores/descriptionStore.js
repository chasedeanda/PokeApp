var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var pokeStore = require('./pokeStore.js');

var CHANGE_EVENT = 'change';

var _state = {
	currentDesc: "",
	alternateDesc: []
}

var setCurrentDesc = function(desc){
	_state.currentDesc = desc;
}
var setAlternateDesc = function(desc){
	_state.alternateDesc.concat([desc]);
}
var clearAlternateDesc = function(){
	_state.alternateDesc = [];
}

var descriptionStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener:function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener:function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	getCurrentDesc:function(){
		return _state.currentDesc;
	},
	getAlternateDesc:function(){
		return _state.alternateDesc;
	}
});

descriptionStore.dispatchToken = AppDispatcher.register(function(payload){
	// AppDispatcher.waitFor([pokeStore.dispatchToken]);
	var action = payload.action;
	switch(action.actionType){
		case appConstants.GET_POKE_DESC:
			debugger
			setCurrentDesc(action.data);
			descriptionStore.emit(CHANGE_EVENT);
			break;
		case appConstants.GET_ALTERNATE_DESC:
			setAlternateDesc(action.data);
			descriptionStore.emit(CHANGE_EVENT);
			break;
		case appConstants.CLEAR_ALTERNATE_DESC:
			clearAlternateDesc();
			descriptionStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = descriptionStore;