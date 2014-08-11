/**
 * Created by sebastian on 4/18/14.
 * Patched by Akay 4/22/14
 */


exports.config = {
	// The address of a running selenium server.
	seleniumAddress : 'http://127.0.0.1:4444/wd/hub',
//	seleniumPort: 7055,
//    seleniumAddress : 'http://188.226.206.224:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
	capabilities : {
		'browserName' : 'firefox'
	},

	//If true, only chromedriver will be started, not a standalone selenium.
	chromeOnly : false,

   //Setting of the window size.
    onPrepare: function() {
        browser.driver.manage().window().setSize(1350, 600);
    },

    // Spec patterns are relative to the current working directly when
	// protractor is called.

	specs : ['test_login_failure.js'],

    //specs : ['./e2e/angular_ex.js'],

	baseUrl : 'http://localhost:63342/BespokeCloud/app/index.html#',

    //baseUrl: 'http://localhost:9000',

    //allScriptsTimeout: 20000,

    //getPageTimeout: 20000,


	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 35000
	}
};
