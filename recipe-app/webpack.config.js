var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: __dirname + "/public/js",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
      exclude: /node_modules/,
			include: path.join(__dirname, '/client/'),
      loader: "babel-loader",
			query: {
      	presets: ["react", "es2015"]
    	}
		}, {
			test: /\.s?css$/,
			loaders: ["style-loader", "css-loader", "sass-loader"],
		}, {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader',
    }, {
			test: /\.(png|gif|jpe?g|jpg)$/,
      	loaders: "url-loader",
    }, {
      test: /\.svg$/,
      loader: "babel-loader!react-svg-loader",
    }]
	},
	devtool: "#cheap-module-inline-source-map"
};
