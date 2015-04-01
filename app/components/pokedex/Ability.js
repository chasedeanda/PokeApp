var React = require('react');

var Ability = React.createClass({
	propTypes:{
		abilities: React.PropTypes.array.isRequired
	},
	render:function(){
		var abilities = this.props.abilities.map(function(ability, index){
			return(
				<li className="list-group-item capitalize" key={index}>
					{ability.name}
				</li>
			)
		}.bind(this));
		return(
			<ul className="list-group">
				{abilities}
			</ul>
		)
	}
});

module.exports = Ability;

/*
   "abilities":[
      {
         "name":"chlorophyll",
         "resource_uri":"/api/v1/ability/34/"
      },
      {
         "name":"overgrow",
         "resource_uri":"/api/v1/ability/65/"
      }
   ]
*/