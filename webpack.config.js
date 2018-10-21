const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/indexTemplate.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
    entry: [
        "./src/app.js"
    ],
	output: {
		path: __dirname,
        publicPath: '/',
		filename: "public/build/app.bundle.js"
	},
	plugins: [HtmlWebpackPluginConfig],
    module: {
        rules: [{
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
        {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192, // Convert images < 8kb to base64 strings
                    name: '[path][name].[ext]'
                }
            }]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        {
          test: /\.css$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }]
        }
    ]},
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/scores': {
                target: "http://localhost:5000",
                secure: false,
                headers: {
                    host: "localhost"
                }
            }
        }
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
