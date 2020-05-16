/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { baseConfig } = require("@blueprintjs/webpack-build-scripts");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const sassCustomFunctions = require('./scripts/sass-custom-functions');
const jsonImporter = require('node-sass-json-importer');

module.exports = Object.assign({}, baseConfig, {

    // EXPORTS:
    // compiled css - for all blueprint modules
    // scss vars - less vars too?
    // js vars - in different syntax - es6, cjs, etc...

    // if IS_PRODUCTION, use additional files
    // - slim index and just the color.js file
    // put those in a libs folder?

    // OR ||

    // always output a different set of css - base blueprint & project specific?
    // would require changing two css files on style switch
    // compile time and thus dev time would be slower
    // no difference in prod v dev...


    entry: {
        "styler-app": "./src/index.tsx",
        "default-styles": "./src/_default-styles/index.scss",
        "new-styles": "./src/_new-styles/index.scss",

        // if IS_PRODUCTION
        // "blueprint-default": "./src/_default-styles/index-slim.scss",
        // "blueprint-new":  "./src/_new-styles/index-slim.scss",
        // colors

    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    configFileName: "./src/tsconfig.json",
                },
            },
            {
                test: /\.scss$/,
                use: [
                    // Only extract CSS to separate file in production mode.
                    // IS_PRODUCTION ? MiniCssExtractPlugin.loader : require.resolve("style-loader"),
                    require.resolve('./scripts/custom-loader.js'),
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            // necessary to minify @import-ed files using cssnano
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            plugins: [
                                require("autoprefixer"),
                                require("cssnano")({ preset: "default" }),
                            ],
                        },
                    },
                    {
                        loader: require.resolve("sass-loader"),
                        options: {
                            functions: sassCustomFunctions,
                            importer: jsonImporter(),
                        }
                    }
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
                loader: require.resolve("file-loader"),
                options: {
                    name: "[name].[ext]?[hash]",
                    outputPath: "assets/",
                },
            },
        ],
    },

    plugins: baseConfig.plugins.concat([
        new CopyWebpackPlugin([
            // to: is relative to dist/
            { from: "src/index.html", to: "." },
            { from: "src/assets/favicon.png", to: "assets" },
        ])
    ]),
});
