/**
 * Created by sebastian on 4/18/14.
 * Patched by Akay 4/22/14
 */

exports.config = {
	// The address of a running selenium server.
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		'browserName' : 'chrome'
	},

   /* customLaunchers: {
        chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
        }
    },*/

	//If true, only chromedriver will be started, not a standalone selenium.
	chromeOnly : true,

	// Spec patterns are relative to the current working directly when
	// protractor is called.

	specs : ['./test_login_failure.js'],


	baseUrl : 'http://localhost:63342/BespokeCloud/app/index.html#',

 	allScriptsTimeout: 20000,

    //baseUrl: 'http://localhost:9000',

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 50000
	}
	
	
};
