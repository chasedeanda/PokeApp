var React = require('react');

var Evolutions = React.createClass({
	propTypes:{
		evolutions: React.PropTypes.array.isRequired
	},
	render:function(){
		var evolutions = this.props.evolutions.map(function(evolution,index){
			return(
				<li key={index} className="list-group-item">Evolves into {evolution.to} at lvl {evolution.level}.</li>
			)
		}.bind(this));
		return(
			<ul className="list-group">
				{evolutions}
			</ul>
		)
	}
});

module.exports = Evolutions;

/*
   "evolutions":[
      {
         "level":16,
         "method":"level_up",
         "resource_uri":"/api/v1/pokemon/2/",
         "to":"Ivysaur"
      }
   ]
*/