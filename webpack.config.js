const webpack = require('webpack')
	, path = require('path').resolve(__dirname, 'src')
	;

const config = {
	entry: path + '/index.js'
	, devtool: 'source-map'
	, devServer: {
		inline: true
		, historyApiFallback: true
		, contentBase: './dist'
	}
	, output: {
		path: './dist'
		, filename: 'bundle.js'
	}
	, module: {
		loaders: [{
			test: /\.js$/
			, include: path
			, loader: 'babel'
		}]
	}
};

module.exports = config;