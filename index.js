var express = require('express');
var Vue = require('vue');

var vsr = require('vue-server-renderer');

var renderer = vsr.createRenderer();

var fs = require('fs');

var app = express();

app.use('/static', express.static('./public/static'));

var beApp = vsr.createBundleRenderer(fs.readFileSync('./be/server.bundle.js'));

app.use(function (req, res, next) {

    var stream = beApp.renderToStream({});

    res.write(`<!DOCTYPE html><html><head><title>...</title></head><body>`);

    stream.on('data', chunk => {
        res.write(chunk);
    });

    stream.on('end', () => {
        res.end(`
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.0-rc.5/vue.js"></script>

            <script type="text/javascript" src="/static/app/init.js"></script>
            <script type="text/javascript" src="/static/app/app.bundle.js"></script>

            </body></html>
        `);
    });
});

app.listen(8080);