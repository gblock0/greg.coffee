const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './client/index.js',
	output: {
		path: __dirname +  '/public',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
			{ test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
		]
	},
	plugins: [ HtmlWebpackPluginConfig ]
};
