const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: __dirname,
        filename: 'conworks.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@view': path.resolve(__dirname, 'src/view'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
