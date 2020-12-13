const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: "./js/index.js",
    profile: "./js/profile.js",
    skills: "./js/skills.js",
    works: "./js/works.js",
    each_work: "./js/each_work.js",
    contact: "./js/contact.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    // publicPath: "public/",
    // If using HtmlWebpackPlugin, publicPath should be ""
    publicPath: "",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        include: path.join(__dirname, "sources/image"),
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
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
        test: /\.(woff2|woff|ttf)$/,
        use: ["file-loader"],
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
      template: "./templates/index.hbs",
      description: "This is an index page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      chunks: ["profile"],
      title: "TOMO's Portfolio",
      template: "./templates/profile.hbs",
      description: "This is a profile page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "skills.html",
      chunks: ["skills"],
      title: "TOMO's Portfolio",
      template: "./templates/skills.hbs",
      description: "This is a skills page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "works.html",
      chunks: ["works"],
      title: "TOMO's Portfolio",
      template: "./templates/works.hbs",
      description: "This is a works page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "each_work.html",
      chunks: ["each_work"],
      title: "TOMO's Portfolio",
      template: "./templates/each_work.hbs",
      description: "This is a each-work page of TOMO's portfolio",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      chunks: ["contact"],
      title: "TOMO's Portfolio",
      template: "./templates/contact.hbs",
      description: "This is a contact page of TOMO's portfolio",
    }),
    new Dotenv({
      path: '.env',
      safe: false
    })
  ],
};
