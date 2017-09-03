import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true,
			noinfo: false
		})
	],
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
			{test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
			{test: /\.(csv|tsv)$/, use: ['csv-loader']},
			{test: /\.xml$/, use: ['xml-loader']},
		]
	}
}
