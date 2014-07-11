/**
 * Created by akay on 4/22/14.
 */
describe("E2E: Testing Login", function() {

	var ptor = protractor.getInstance();
	ptor.ignoreSynchronization = true;

/*	it("should have a working login page", function() {
		ptor.get('https://angularjs.org/');
		//expect(ptor.getCurrentUrl()).toEqual(ptor.baseUrl + '/connect');

        ptor.sleep(2000);

        var username = ptor.findElement(protractor.By.model('yourName'));
        username.sendKeys('vampie');
          ptor.sleep(1000);
	
	});
	
*/
	it("ng-upload example", function() {
		
	ptor.get('http://ng-upload.azurewebsites.net/')
        ptor.sleep(1500);

    //    ptor.findElement(protractor.By.model('fullname')).sendKeys('akay');
      //  ptor.findElement(protractor.By.model('gender')).sendKeys('99');
        //ptor.findElement(protractor.By.model('color')).sendKeys('black-red');
        ptor.findElement(protractor.By.name('file')).sendKeys('C:\\Users\\Administrator\\Downloads\\angular.min.js');
       // ptor.findElement(protractor.By.model('submit2')).click();
ptor.sleep(2000);
});
	
});
