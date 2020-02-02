module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: __dirname,
        filename: 'conworks.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
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
