var webpack=require('webpack');
var path=require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//console.log(process.argv);
var plugins=[new ExtractTextPlugin("styles.css", { allChunks: true })
			,new HtmlWebpackPlugin({
				filename:'./index.html',
				template:'./src/index.html',
				hash: true
			})];
if(process.argv.indexOf('--production')>-1){
	plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    }
}));}
module.exports = [{
	entry: './src/index.js',
	output: {
		path: './dist/',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: ['babel'], // 'babel-loader' is also a legal name to reference
			query: {
				presets: ['es2015'],
				plugins: ['transform-runtime']
			}
		}, {
			test: /\.html$/,
			exclude: /(node_modules|bower_components)/,
			include: /(template)/,
			loader: "ng-cache?prefix=/"
		},
		{
			test: /\.(less|css)$/,
			loader:  ExtractTextPlugin.extract('css!less')
		},
		{ test: /\.(jpe?g|png|jpg|eot|woff|ttf|svg|gif)$/, loader: "file-loader?name=./img/[name].[ext]?[hash]" }
		 ,{ test: /\.(jpe?g|jpg|png|gif|svg)$/i, loader: 'img?minimize&progressive=true&optimizationLevel=5' }
		]
	},
	plugins:plugins
},{
	entry: './src/require.config.js',
	output: {
		path: './dist/',
		filename: 'require.config.js'
	}
}]
