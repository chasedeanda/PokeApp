var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
	render:function(){
		return(
			<nav className="navbar navbar-default navbar-static-top">
	          <div className="container-fluid">
	            <div className="navbar-header">        
	              <ul className="nav navbar-nav">
	              	<li><Link to="home" className="navbar-brand"> <img src="../app/assets/images/poke-logo.gif" alt="logo" /></Link></li>
	              	<li><Link to="pokedex">PokeDex</Link></li>
	              </ul>
	            </div>
	            <ul className="nav navbar-nav pull-right">
	              <li><Link to="register" className="navbar-brand"> Create an Account </Link></li>
	            </ul>
	          </div>
	        </nav>
		)
	}
});

module.exports = Nav;



