httpProxy = require('http-proxy');

protocol = process.env.PROTOCOL || 'https:'
port = process.env.PORT || 443
host = process.env.HOST

console.log("protocol: " + protocol)
console.log("port: " + port)
console.log("host: " + host)

httpProxy.createProxyServer({
    target: {
        protocol: protocol,
        host: host,
        port: port,
    },
    secure: false, // This is the thing that works
    changeOrigin: true,
}).listen(8000);