var Vue = require('vue');

var App = require('../App/App');

var app = new Vue(App);

export default function(context) {

    return new Promise((resolve, reject) => {

        // app.fetchServerData(context);

        resolve(app);
    });

};
