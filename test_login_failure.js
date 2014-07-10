/**
 * Created by akay on 4/22/14.
 */
describe("E2E: Testing Login", function() {

	var ptor = protractor.getInstance();
//	ptor.ignoreSynchronization = true;

	it("should have a working login page", function() {
		ptor.get('https://angularjs.org/');
		//expect(ptor.getCurrentUrl()).toEqual(ptor.baseUrl + '/connect');

        ptor.sleep(2000);

        var username = ptor.findElement(protractor.By.model('yourName'));
        username.sendKeys('vampie');
          ptor.sleep(1000);
	
	});
});
