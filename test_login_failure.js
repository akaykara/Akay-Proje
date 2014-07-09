/**
 * Created by akay on 4/22/14.
 */
describe("E2E: Testing Login", function() {

	var ptor = protractor.getInstance();

	it("should have a working login page", function() {
		ptor.get('https://angularjs.org/');
		//expect(ptor.getCurrentUrl()).toEqual(ptor.baseUrl + '/connect');

        //ptor.sleep(4000);

        var btnlogin = ptor.findElement(protractor.By.model('yourName'));
        btnlogin.sendKeys('asda');

	
	});
});
