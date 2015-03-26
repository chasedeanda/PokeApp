var React = require('react');

var Register = React.createClass({
	render:function(){
		return(
			<div className="col-md-6 center-block">
				<div className="row">
					<h2 className="text-center">Create a New Account</h2>
					<h4 className="text-center">Sign up is fast, easy and best of all FREE!</h4>
					<input type="text" className="form-control" placeholder="Email Address" />
					<input type="password" className="form-control" placeholder="Password" />
					<button className="btn btn-primary">Submit</button>
				</div>
			</div>
		)
	}
});

module.exports = Register;