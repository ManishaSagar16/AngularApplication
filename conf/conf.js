
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['/Users/manishasagar/Desktop/mongodb_database_connect/mongodb_connection.js'],
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true
    },
    onPrepare: function() {
        browser.manage().timeouts().implicitlyWait(20000);
    }
};




// exports.config = {
//     framework: 'jasmine2',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['/Users/manishasagar/Desktop/mongodb_database_connect/mongodb_connection.js'],
//     browserName: 'chrome',

//     chromeOptions: {
//         args: ["--headless", "--disable-gpu", "--window-size=800,600"]
//     }
// };



