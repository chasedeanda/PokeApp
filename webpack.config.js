module.exports = {
	devtool: 'source-maps',
	entry: "./app/App.js",
	output: {
		filename: "./public/bundle.js"
	},
	module: {
		loaders: [
		  {test: /\.js$/, loader: 'jsx-loader'},
		  { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
	      { test: /\.ttf$/,    loader: "file-loader" },
	      { test: /\.eot$/,    loader: "file-loader" },
	      { test: /\.svg$/,    loader: "file-loader" }
		]
	}
};