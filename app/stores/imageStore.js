var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var pokeStore = require('./pokeStore.js');

var CHANGE_EVENT = 'change';

var _state = {
	currentImage: "",
	alternateImages: []
}

var setCurrentImage = function(source){
	source = appConstants.POKE_BASE + source;
	_state.currentImage = source;
}
var setAlternateImage = function(source){
	_state.alternateImages.concat([source]);
}
var clearAlternateImages = function(){
	_state.alternateImages = [];
}

var imageStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener:function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener:function(){
		this.removeListener(CHANGE_EVENT,cb);
	},
	getCurrentImage:function(){
		return _state.currentImage;
	},
	getAlternateImages:function(){
		return _state.alternateImages;
	}
});

imageStore.dispatchToken = AppDispatcher.register(function(payload){
	// AppDispatcher.waitFor([pokeStore.dispatchToken]);
	var action = payload.action;
	switch(action.actionType){
		case appConstants.GET_POKE_IMAGE:
			debugger
			setCurrentImage(action.data);
			imageStore.emit(CHANGE_EVENT);
			break;
		case appConstants.GET_ALTERNATE_IMAGES:
			setAlternateImage(action.data);
			imageStore.emit(CHANGE_EVENT);
			break;
		case appConstants.CLEAR_ALTERNATE_IMAGES:
			clearAlternateImages();
			imageStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = imageStore;