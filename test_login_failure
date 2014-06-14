/**
 * Created by akay on 4/22/14.
 */
describe("E2E: Testing Login", function() {

	var ptor = protractor.getInstance();

	it("should have a working login page", function() {
		ptor.get(ptor.baseUrl);
		//expect(ptor.getCurrentUrl()).toEqual(ptor.baseUrl + '/connect');

        //ptor.sleep(4000);

        var btnlogin = ptor.findElement(protractor.By.model('navLogin')).click();

		var username = ptor.findElement(protractor.By.model('login.username'));
		username.sendKeys('vampie');
		ptor.sleep(600);

		var password = ptor.findElement(protractor.By.model('login.password'));
		password.sendKeys('123456');
		ptor.sleep(600);

		var button = ptor.findElement(protractor.By.model('button.login'))
				.click();

		var button2 = ptor.findElement(protractor.By.buttonText('Login'));
		expect(button2.getText()).toEqual('Login');

		/*var lbl = ptor.findElement(protractor.By.tagName('h5'));
		expect(lbl.getText()).toEqual('Connect Tab Content');*/

		//var lbl2 = ptor.findElement(protractor.By.id('scene-title'));
		//expect(lbl2.getText()).toEqual('Scene:');

		expect(username.getAttribute('value')).toEqual('vampie');
		expect(password.getAttribute('value')).toEqual('123456');

	});
});
