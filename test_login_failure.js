/**
 * Created by akay on 4/22/14.
 */
describe("E2E: Testing Login", function() {

	var ptor = protractor.getInstance();
//	ptor.ignoreSynchronization = true;

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
		
	ptor.get('http://www.wicket-library.com/wicket-examples/upload/single;jsessionid=16B8898724337AF77B12DA5A07C87120?0')
        ptor.sleep(1500);

    //    ptor.findElement(protractor.By.model('fullname')).sendKeys('akay');
      //  ptor.findElement(protractor.By.model('gender')).sendKeys('99');
        //ptor.findElement(protractor.By.model('color')).sendKeys('black-red');
        ptor.findElement(protractor.By.id('yui_3_17_2_1_1405076804084_90')).sendKeys('C:\\Users\\Administrator\\Downloads\\angular.min.js');
        ptor.findElement(protractor.By.id('uploadFilesButton')).click();

});
	
});
