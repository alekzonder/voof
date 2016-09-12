var withRender = require('./app.html');

var a = withRender({
    props: {
        one: null
    },
    data: function () {
        return {
            component: 'main-page'
        };
    },
    components: {
        'main-page': require('../Component/Main/Main')
    }
});

module.exports = a;
