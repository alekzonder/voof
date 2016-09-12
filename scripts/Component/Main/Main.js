var withRender = require('./main.html');

module.exports = withRender({
    data: function () {
        return {
            test: 'TEST'
        };
    },
    methods: {
        click: function () {
            this.test = 'SUPERTEST';
        }
    }
});

