// 引入一个包
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        },
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                    // 配置babel
                    loader: 'babel-loader',
                    options: {
                        // 设置预定义环境
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    // 设置要兼容的目标浏览器
                                    targets: {
                                        'chrome': '88',
                                        // 'ie': '11'
                                    },
                                    // 指定corejs的版本
                                    "corejs": "3",
                                    // 使用corejs的方式 "usage"表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                }, 'ts-loader'],
                exclude: /node_module/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入postcss
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 3 version'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ],
    },
    // 配置webpack-plugin插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "这是一个title",
            template: "./src/index.html"
        }),

    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}