var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var appConstants = require('../../constants/appConstants.js');
var pokeActions = require('../../actions/pokeActions.js');
var pokeUtils = require('../../utils/pokeUtils.js');
var pokeStore = require('../../stores/pokeStore.js');

var Pokemon = React.createClass({
	getInitialState:function(){
		return {
			currentPokemon: pokeStore.getCurrentPokemon()
		}
	},
	componentWillMount:function()
	{
		debugger
		pokeActions.getPokemon(this.state.currentPokemon)
		pokeStore.addChangeListener(this._onChange);
	},
	componentWillUnmount:function(){
		pokeStore.removeChangeListener(this._onChange);
	},
	_onChange:function(){
		this.setState({
			currentPokemon: pokeStore.getCurrentPokemon()
		})
	},
	render:function(){
		debugger
		// var imgUrl = appConstants.POKE_BASE + this.state.currentPokemon.sprites.resource_uri;
		var imgUrl = "";
		return(
			<li className="list-group-item">
				<div className="pull-left col-md-4">
					<img className="img-responsive" src={imgUrl} />{' '}
					<span>{this.state.currentPokemon.name}</span>
				</div>
				<div className="pull-right text-right col-md-8">
					<span>#{this.state.currentPokemon.national_id}</span>{' '}
					// <span>{this.state.currentPokemon.description}</span>
				</div>
			</li>
		)
	}
});

module.exports = Pokemon;

/*
{
	"abilities": [
		{
			"name": "own-tempo",
			"resource_uri": "/api/v1/ability/20/"
		},
		{
			"name": "technician",
			"resource_uri": "/api/v1/ability/101/"
		},
		{
			"name": "moody",
			"resource_uri": "/api/v1/ability/141/"
		}
	],
	"attack": 20,
	"catch_rate": 0,
	"created": "2013-11-03T15:05:41.690679",
	"defense": 35,
	"descriptions": [
		{
			"name": "smeargle_gen_2",
			"resource_uri": "/api/v1/description/3660/"
		},
		{
			"name": "smeargle_gen_3",
			"resource_uri": "/api/v1/description/3661/"
		},
		{
			"name": "smeargle_gen_3",
			"resource_uri": "/api/v1/description/3662/"
		},
		{
			"name": "smeargle_gen_3",
			"resource_uri": "/api/v1/description/3663/"
		},
		{
			"name": "smeargle_gen_4",
			"resource_uri": "/api/v1/description/3664/"
		},
		{
			"name": "smeargle_gen_4",
			"resource_uri": "/api/v1/description/3665/"
		},
		{
			"name": "smeargle_gen_4",
			"resource_uri": "/api/v1/description/3666/"
		},
		{
			"name": "smeargle_gen_5",
			"resource_uri": "/api/v1/description/3667/"
		},
		{
			"name": "smeargle_gen_6",
			"resource_uri": "/api/v1/description/3668/"
		},
		{
			"name": "smeargle_gen_6",
			"resource_uri": "/api/v1/description/3669/"
		},
		{
			"name": "smeargle_gen_1",
			"resource_uri": "/api/v1/description/3656/"
		},
		{
			"name": "smeargle_gen_1",
			"resource_uri": "/api/v1/description/3658/"
		},
		{
			"name": "smeargle_gen_1",
			"resource_uri": "/api/v1/description/3657/"
		},
		{
			"name": "smeargle_gen_2",
			"resource_uri": "/api/v1/description/3659/"
		}
	],
	"egg_cycles": 0,
	"egg_groups": [
		{
			"name": "Ground",
			"resource_uri": "/api/v1/egg/5/"
		}
	],
	"ev_yield": "",
	"evolutions": [],
	"exp": 88,
	"growth_rate": "",
	"happiness": 0,
	"height": "12",
	"hp": 55,
	"male_female_ratio": "",
	"modified": "2013-11-23T13:13:31.788644",
	"moves": [
		{
			"learn_type": "level up",
			"level": 1,
			"name": "Sketch",
			"resource_uri": "/api/v1/move/166/"
		}
	],
	"name": "Smeargle",
	"national_id": 235,
	"pkdx_id": 235,
	"resource_uri": "/api/v1/pokemon/235/",
	"sp_atk": 20,
	"sp_def": 45,
	"species": "",
	"speed": 75,
	"sprites": [
		{
			"name": "smeargle",
			"resource_uri": "/api/v1/sprite/236/"
		}
	],
	"total": 0,
	"types": [
		{
			"name": "normal",
			"resource_uri": "/api/v1/type/1/"
		}
	],
	"weight": "580"
}
*/