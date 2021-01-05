const path = require('path');

const SRC_DIR = path.join(__dirname, "/client/src");
const OUT_DIR = path.join(__dirname, "./client/dist");

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'), //here the application starts executing and webpack starts bundling
    output: {
        path: OUT_DIR,
        filename: "webpackApp.js",
         // the url to the output directory resolved relative to the HTML page
        // publicPath: "/assets/",
        // library: { // There is also an old syntax for this available (click to show)
        //   type: "umd", // universal module definition
        //   // the type of the exported library
        //   name: "MyLibrary", // string | string[]
        //   // the name of the exported library
        // }
    },
    module: { //configuration regaring modules
      rules: [
        {
          test:/\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    mode: "development", //"production | development | none.... tells webpack to use its built in optimizations correctly"
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  };
  