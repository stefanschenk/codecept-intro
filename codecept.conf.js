exports.config = {

    bootstrap: false,

    helpers: {
        Puppeteer: {
            show: true,
            url: 'http://todomvc.com/examples/angularjs/#/'
        },
        REST: {}
    },

    include: {
        I: './steps_file.js'
    },

    mocha: {},
    name: 'workshop-introduction-codeceptjs',

    output: './output',

    timeout: 10000,

    tests: './features/*_test.js'
};
