const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_PATH = path.resolve(__dirname, '../dist');

const config = {
    entry: path.resolve(__dirname, '../src/main.ts'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, BUILD_PATH),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {

                        },
                    },
                ],
            },
            {
                test: /\.tsx|ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/template.html'),
            title: 'eos',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
    devServer: {
        contentBase: path.resolve(BUILD_PATH),
        compress: true,
        port: 8003,
    },
};

module.exports = config;
