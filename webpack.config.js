var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

// var webpack = require('webpack');
//
// module.exports = {
//     entry: [
//       // 'webpack/hot/only-dev-server',
//       "./js/app.js"
//     ],
//     output: {
//         path: __dirname + '/build',
//         filename: "bundle.js",
//         publicPath: "/"
//     },
//     module: {
//         loaders: [
//             // { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
//             {
//                test: /\.js$/,
//                exclude: /node_modules/,
//                loader: 'babel-loader'
//             },
//             {
//                test: /\.css$/,
//                loader: "style!css"
//             }
//         ]
//     }//,
//    //  plugins: [
//    //    new webpack.NoErrorsPlugin()
//    //  ]
//
// };

// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   entry: [
//     'webpack-dev-server/client?http://localhost:3000',
//     'webpack/hot/only-dev-server',
//     './js/app.js'
//   ],
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js'//,
//    //  publicPath: '/assets/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['react-hot', 'babel', 'babel-loader'],
//       include: path.join(__dirname, 'src'),
//       query: {
//         presets: ['es2015', "stage-0", "react"]
//     }
//     }, {
//       test: /\.less$/,
//       loader: 'style-loader!css-loader!less-loader'
//     }, {
//       test: /\.css$/,
//       loader: 'style-loader!css-loader'
//     }]
//   }
// };