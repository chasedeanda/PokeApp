var React = require('react');

var Eggs = React.createClass({
	propTypes:{
		eggs: React.PropTypes.array.isRequired
	},
	render:function(){
		var eggs = this.props.eggs.map(function(egg, index){
			return(
				<li className="list-group-item" key={index}>
					{egg.name}
				</li>
			)
		});
		return(
			<ul className="list-group">
				{eggs}
			</ul>
		)
	}
});

module.exports = Eggs;