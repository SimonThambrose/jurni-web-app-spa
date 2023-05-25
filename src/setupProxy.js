const {createProxyMiddleware} = require('http-proxy-middleware');
const target = 'https://localhost:7205';

const context = [
    "/api"
];

const onError = (err) => {
    console.error(`${err.message}`);
}

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: target,
        onError: onError,
        changeOrigin: true,
        secure: false,
        headers: {
            Connection: 'Keep-Alive'
        }
    });

    app.use(appProxy);
};