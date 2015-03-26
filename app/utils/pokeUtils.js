var appConstants = require('../constants/appConstants.js');
var axios = require('axios');

var pokeUtils = {
	getPokedex:function(){
		var url = appConstants.POKE_BASE + "/api/v1/pokedex/1/";
		return axios.get(url);
	},
	getPokemon:function(url){
		debugger
		var url = appConstants.POKE_BASE + url;
		return axios.get(url);
	},
	getDescription:function(url){
		var url = appConstants.POKE_BASE + url;
		return axios.get(url);
	},
	toArray: function(obj){
	    var arr = [];
	    for(var key in obj){
	      arr.push(obj[key]);
	    }
	    return arr;
	  }
}

module.exports = pokeUtils;