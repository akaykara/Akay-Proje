/**
 * Created by sebastian on 4/18/14.
 * Patched by Akay 4/22/14
 */


exports.config = {
	// The address of a running selenium server.
	seleniumAddress : 'http://localhost:4444/wd/hub',
    //seleniumAddress : 'http://188.226.206.224:4444/wd/hub',

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

	specs : ['./e2e/protractor/test_draw.js','./e2e/protractor/jenkins_test.js'],

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
