module.exports = {
	devtool: 'source-maps',
	entry: "./app/App.js",
	output: {
		filename: "./public/bundle.js"
	},
	module: {
		loaders: [
		  {test: /\.js$/, loader: 'jsx-loader'}
		]
	}
};