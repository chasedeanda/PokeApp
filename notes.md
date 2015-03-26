Pokemon Calculator:
------------------------------------------------------------------------------------------------------------------------------------
(1) Times the day you were born by the month you were born. (Example: 19 x 5 = 95)
(2) Times the result by the amount of letters in your name (Since everyone's doin' it! Include all three choices of first name/first and last/full name if you would like!). (8 x 95 = 760)
(3) Divide the results on a calculator by two until it is 649 or under, ignoring decimal points if need be. (760/2 = 380)
(4) Search the number up and find what Pokemon you truly are~! (Latias! :3)

API information at http://pokeapi.co/docs/#pokedex

Pokemon
GET all http://pokeapi.co/api/v1/pokedex/1/

Example output from http://pokeapi.co/api/v1/pokemon/235/
------------------------------------------------------------------------------------------------------------------------------------
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

Types
Example output from http://pokeapi.co/api/v1/type/10/
------------------------------------------------------------------------------------------------------------------------------------
{
	"created": "2013-11-02T12:09:46.396000",
	"id": 10,
	"ineffective": [
		{
			"name": "fire",
			"resource_uri": "/api/v1/type/10/"
		},
		{
			"name": "water",
			"resource_uri": "/api/v1/type/11/"
		},
		{
			"name": "rock",
			"resource_uri": "/api/v1/type/6/"
		},
		{
			"name": "dragon",
			"resource_uri": "/api/v1/type/16/"
		}
	],
	"modified": "2013-11-02T12:09:46.396000",
	"name": "Fire",
	"no_effect": [],
	"resistance": [],
	"resource_uri": "/api/v1/type/10/",
	"super_effective": [
		{
			"name": "grass",
			"resource_uri": "/api/v1/type/12/"
		},
		{
			"name": "ice",
			"resource_uri": "/api/v1/type/15/"
		},
		{
			"name": "bug",
			"resource_uri": "/api/v1/type/7/"
		},
		{
			"name": "steel",
			"resource_uri": "/api/v1/type/9/"
		}
	],
	"weakness": [
		{
			"name": "water",
			"resource_uri": "/api/v1/type/11/"
		},
		{
			"name": "rock",
			"resource_uri": "/api/v1/type/6/"
		},
		{
			"name": "ground",
			"resource_uri": "/api/v1/type/5/"
		}
	]
}

Example of description:
-----------------------------------------------------------------------------------------------------------------------------

{
	"created": "2013-12-24T17:15:28.399255",
	"description": "SMEARGLE marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this POKMON have been found.",
	"games": [
		{
			"name": "gold",
			"resource_uri": "/api/v1/game/7/"
		},
		{
			"name": "silver",
			"resource_uri": "/api/v1/game/8/"
		}
	],
	"id": 3659,
	"modified": "2014-01-18T14:30:13.524370",
	"name": "Smeargle_gen_2",
	"pokemon": {
		"name": "smeargle",
		"resource_uri": "/api/v1/pokemon/235/"
	},
	"resource_uri": "/api/v1/description/3659/"
}



























