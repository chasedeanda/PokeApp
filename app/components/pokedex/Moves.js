var React = require('react');

var Moves = React.createClass({
	propTypes:{
		moves: React.PropTypes.array.isRequired
	},
	render:function(){
		var moves = this.props.moves.map(function(move, index){
			return(
				<li className="list-group-item" key={index}>
					{move.name} - {move.learn_type}
				</li>
			)
		}.bind(this));
		return(
			<ul className="list-group moves-list">
				{moves}
			</ul>
		)
	}
});

module.exports = Moves;

/*
{
	 "learn_type":"tutor",
	 "name":"Bind",
	 "resource_uri":"/api/v1/move/20/"
}
*/