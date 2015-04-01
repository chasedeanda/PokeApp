var React = require('react');
var pokeUtils = require('../../utils/pokeUtils.js');
var appConstants = require('../../constants/appConstants.js');

var Alternates = React.createClass({
	propTypes:{
		imagesAR: React.PropTypes.array,
		descriptionsAR: React.PropTypes.array,
		currentImage: React.PropTypes.string.isRequired,
		currentDescription: React.PropTypes.string.isRequired
	},
	getInitialState:function(){
		return{
			images: [],
			descriptions: []
		}
	},
	componentWillReceiveProps:function(nextProps){
		// Reset State
		this.setState({
			images: [],
			descriptions: []
		})
		var images = this.props.imagesAR.map(function(image,index){
			this.getImage(image.resource_uri);
		}.bind(this));
		var descriptions = this.props.descriptionsAR.map(function(description,index){
			this.getDescription(description.resource_uri);
		}.bind(this));
	},
	getImage:function(resource){
		pokeUtils.get(resource).then(function(response){
			var source = appConstants.POKE_BASE  + response.data.image;
			if(this.state.images.indexOf(source) < 0)
				if(source !== this.props.currentImage)
					this.setState({
						images: this.state.images.concat([source])
					})
		}.bind(this));
	},
	getDescription:function(resource){
		pokeUtils.get(resource).then(function(response){
			var description = response.data.description;
			if(this.state.descriptions.indexOf(description) < 0)
				if(description !== this.props.currentDescription)
					// Get more description info here
					this.setState({
						descriptions: this.state.descriptions.concat([description])
					})
		}.bind(this));
	},
	render:function(){
		var images = this.state.images.map(function(image,index){
			// debugger
			return(<img className="center-block bottom10" src={image} key={index}/>)
		}.bind(this));
		var descriptions = this.state.descriptions.map(function(description, index){
			return(<li className="list-group-item" key={index}><span className="block">{description}</span></li>)
		}.bind(this));
		return(
			<div>
				{images}
				<ul className="list-group desc-ul clearfix">
					{descriptions}
				</ul>
			</div>
		)
	}
});

module.exports = Alternates;

/*
"sprites":[
      {
         "name":"bulbasaur",
         "resource_uri":"/api/v1/sprite/2/"
      },
      {
         "name":"bulbasaur",
         "resource_uri":"/api/v1/sprite/1/"
      }
   ],"descriptions":[
      {
         "name":"bulbasaur_gen_1",
         "resource_uri":"/api/v1/description/4/"
      },
      {
         "name":"bulbasaur_gen_1",
         "resource_uri":"/api/v1/description/5/"
      },
      {
         "name":"bulbasaur_gen_1",
         "resource_uri":"/api/v1/description/6/"
      },
      {
         "name":"bulbasaur_gen_2",
         "resource_uri":"/api/v1/description/7/"
      },
      {
         "name":"bulbasaur_gen_2",
         "resource_uri":"/api/v1/description/8/"
      },
      {
         "name":"bulbasaur_gen_3",
         "resource_uri":"/api/v1/description/9/"
      },
      {
         "name":"bulbasaur_gen_3",
         "resource_uri":"/api/v1/description/10/"
      },
      {
         "name":"bulbasaur_gen_3",
         "resource_uri":"/api/v1/description/11/"
      },
      {
         "name":"bulbasaur_gen_4",
         "resource_uri":"/api/v1/description/12/"
      },
      {
         "name":"bulbasaur_gen_4",
         "resource_uri":"/api/v1/description/13/"
      },
      {
         "name":"bulbasaur_gen_4",
         "resource_uri":"/api/v1/description/14/"
      },
      {
         "name":"bulbasaur_gen_5",
         "resource_uri":"/api/v1/description/15/"
      },
      {
         "name":"bulbasaur_gen_1",
         "resource_uri":"/api/v1/description/2/"
      },
      {
         "name":"bulbasaur_gen_1",
         "resource_uri":"/api/v1/description/3/"
      }
   ],
*/