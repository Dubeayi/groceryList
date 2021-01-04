const path = require('path');

// const SRC_DIR = path.join(__dirname, "/client/src")

module.exports = {
  mode: "production", //"production | development | none.... tells webpack to use its built in optimizations correctly"
  entry: "./Users/macusers/miniApps/client/src/index.js", //here the application starts executing and webpack starts bundling
    output: {
        path:path.resolve(__dirname, "client", "dist"),
        filename: "webpackApp.js",
         // the url to the output directory resolved relative to the HTML page
        publicPath: "/assets/",
        library: { // There is also an old syntax for this available (click to show)
          type: "umd", // universal module definition
          // the type of the exported library
          name: "MyLibrary", // string | string[]
          // the name of the exported library
    },
    module: { //configuration regaring modules
      rules: [ //rules for modules, loaders etc.
        {
          test: /\.m?js$/,
          exclude: [ 
              /(node_modules|bower_components)/,
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          type: "javascript/auto",
        
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  }
}
  