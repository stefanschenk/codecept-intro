exports.config = {

    bootstrap: false,

    helpers: {
        Mochawesome: {},
        Puppeteer: {
            show: true,
            url: 'https://useless-react-app.azurewebsites.net'
        },
        REST: {
            endpoint: 'https://useless-api.azurewebsites.net',
            timeout: 30000,
            resetHeaders: true,
            defaultHeaders: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        },
        UnirestHelper: {
            require: './helpers/unirest.helper.js',
            endpoint: 'https://useless-api.azurewebsites.net'
        }
    },

    include: {
        I: './steps_file.js'
    },

    mocha: {
        'reporterOptions': {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    verbose: false,
                    steps: true
                }
            },
            'mocha-junit-reporter': {
                stdout: '-',
                options: {
                    mochaFile: './output/result.xml'
                }
            },
            mochawesome: {
                stdout: './output/console.log',
                options: {
                    reportDir: './output',
                    reportFilename: 'report'
                }
            }
        }
    },
    name: 'workshop-introduction-codeceptjs',

    output: './output',

    timeout: 10000,

    tests: './features/*_test.js'
};
