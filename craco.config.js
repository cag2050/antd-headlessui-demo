const {name} = require("./package");
const path = require("path");
const CracoLessPlugin = require('craco-less');
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

// const publicPath = process.env.NODE_ENV === "development" ? `//localhost:3006/` : `/genesis-servicemanage/`;
const publicPath = `//localhost:3000/`;

module.exports = {
    webpack: {
        alias: {
            // 约定：使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true, // 启用CSS模块
                                importLoaders: 1,
                                // 其他CSS-Loader选项
                            },
                        },
                        // 其他loader配置
                    ],
                },
            ],
        },
        plugins: {
            add: [
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    // Whether to automatically open the analyzer in the browser.
                    openAnalyzer: true,
                }),
            ]
        },
        configure: (webpackConfig) => {
            // 设置打包后的文件名
            webpackConfig.output.publicPath = publicPath;
            webpackConfig.output.library = `genesis-servicemanage`;
            webpackConfig.output.libraryTarget = "umd";
            webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
            webpackConfig.devtool = false;
            return webpackConfig;
        },
    },
    devServer: (devServerConfig) => {
        devServerConfig.historyApiFallback = true;
        devServerConfig.open = false;
        devServerConfig.hot = false;
        devServerConfig.watchFiles = [];
        devServerConfig.headers = {
            "Access-Control-Allow-Origin": "*",
        };
        devServerConfig.proxy = [
            {
                target: 'http://172.27.128.100',
                secure: false,
                headers: {
                    host: '172.27.128.100',
                },
                context: ['/api', '/console', '/apps'],
            },
        ]
        return devServerConfig;
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                cssLoaderOptions: {
                    modules: {
                        localIdentName: "[local]"
                    }
                },
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                        // publicPath: publicPath,
                        // sourceMap: true, // 启用 source map
                    },
                },
            },
        },

    ],
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", {legacy: true}]
        ]
    },
    // style: {
    //   postcss: {
    //     plugins: [
    //       require('autoprefixer'),
    //     ],
    //   },
    // },
};
