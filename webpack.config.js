const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: "development",
	optimization: {
		minimize: false
	},
	module: {
		rules: [{
			test: /\.js/,
			use:  {
				loader: 'babel-loader',
				options: {
					presets: ["@babel/preset-env"],
					plugins:[[
						"@babel/plugin-transform-react-jsx",
						{pragma:'ToyReact.createElement'}
					]]
				}
			}
		}]
	}
};
