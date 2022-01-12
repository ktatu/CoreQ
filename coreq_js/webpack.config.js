const path = require("path")

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
        compress: true,
        historyApiFallback: true,
        port: 3000,
    },
    devtool: 'source-map',
    module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
                {
                    test: /\.txt$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.asset.js$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}

module.exports = config