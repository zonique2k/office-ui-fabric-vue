const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const prism = require('prismjs');

module.exports = function(env) {
  entry = { 'office-ui-fabric.es.js': './src/es.js' }

  let uglifyPlugin = []

//   if (env.production) {
//     uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin());
//   }

  return {
    context: __dirname,
    entry: entry,
    output: {
      path: __dirname + '/dist',
      filename: '[name]',
      publicPath: 'http://localhost:8080/dist',
      umdNamedDefine: true,
      library: 'OfficeUIFabricVue',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: [
            'vue-loader',
            // 'eslint-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'lib')
          ],
          use: [
            'babel-loader',
            // 'eslint-loader'
          ]
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'node_modules/office-ui-fabric-js/dist'),
          use: ['script-loader']
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {
                highlight: function (code, lang) {
                  if (typeof(lang) == 'undefined') { lang = 'markup'; }
                  return prism.highlight(code, prism.languages[lang]);
                }
              }
            }
          ]
        }
      ]
    },
    externals: {
        vue: 'vue'
      },
    plugins: [
      ...uglifyPlugin,
    //   new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin('[name]'),
      //  define the vue enviroment.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
        }
      })
    ]
  }
}
