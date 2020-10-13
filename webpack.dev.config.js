const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./js/index.js",
    profile: "./js/profile.js",
    skills: "./js/skills.js",
    works: "./js/works.js",
    each_work: "./js/each_work.js",
    contact: "./js/contact.js",
  },
  output: {
    // Following is for multi page app
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "dist/",
    // If using HtmlWebpackPlugin, publicPath should be ""
    publicPath: "",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000,
  },
  resolve: {
    modules: ["js", "node_modules"],
    extensions: [".ts", ".js", "json"],
  },
  module: {
    rules: [
      // {
      //     test: /\.(xml)$/,
      //     use: [
      //         'xml-loader'
      //     ]
      // },
      {
        test: /\.(png|jpg|svg)$/,
        include: path.join(__dirname, "sources/image"),
        use: ["file-loader"],
        // use: ["url-loader"],
        // use: ["file-loader", "url-loader"],
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       limit: 8000,
        //       name: "sources/image/[name].[ext]",
        //       // name: 'image/[hash]-[name].[ext]'
        //     },
        //   },
        // ],
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: ["file-loader"],
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "sources/font/",
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    // Each time when we run build, inside of the path directory will be cleaned up
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     "**/*",
    //     // Cleaning up build folder
    //     path.join(process.cwd(), "build/**/*"),
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      // filename: "style.[contenthash].css",
      // following is for multi page
      // filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      title: "TOMO's Portfolio",
      template: "./index.hbs",
      description: "This is an index page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      chunks: ["profile"],
      title: "TOMO's Portfolio",
      template: "./profile.hbs",
      description: "This is a profile page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "skills.html",
      chunks: ["skills"],
      title: "TOMO's Portfolio",
      template: "./skills.hbs",
      description: "This is a skills page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "works.html",
      chunks: ["works"],
      title: "TOMO's Portfolio",
      template: "./works.hbs",
      description: "This is a works page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "each_work.html",
      chunks: ["each_work"],
      title: "TOMO's Portfolio",
      template: "./each_work.hbs",
      description: "This is a each-work page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      chunks: ["contact"],
      title: "TOMO's Portfolio",
      template: "./contact.hbs",
      description: "This is a contact page of TOMO's portfolio",
    }),
  ],
};