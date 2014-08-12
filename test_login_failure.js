/**
 * Created by akay on 31.07.2014.
 */

describe("E2E: Testing", function() {

    var ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;

//it("Selenium Test", function() {
  //      ptor.get('http://127.0.0.1:4444/wd/hub');
    //    ptor.sleep(2000);
   // });
    
    it("Register", function() {
       // ptor.get('http://localhost:63342/BespokeCloud/app/index.html');
        ptor.get('http://188.226.206.224/app');
        ptor.sleep(2000);

        element.all(by.id('navRegister')).then(function(selectItem) {
            selectItem[0].click(); //will click on first item

            var username = ptor.findElement(protractor.By.model('registerObj.username'));
            username.sendKeys('akay');

            var realname = ptor.findElement(protractor.By.model('registerObj.name'));
            realname.sendKeys('kara');

            var password = ptor.findElement(protractor.By.model('registerObj.password'));
            password.sendKeys('12345');

            var password2 = ptor.findElement(protractor.By.model('registerObj.password2'));
            password2.sendKeys('12345');

            var email = ptor.findElement(protractor.By.model('registerObj.email'));
            email.sendKeys('akay_kara@hotmail.com');

            expect(username.getAttribute('value')).toEqual('akay');
            expect(realname.getAttribute('value')).toEqual('kara');
            expect(password.getAttribute('value')).toEqual('12345');
            expect(password2.getAttribute('value')).toEqual('12345');
            expect(email.getAttribute('value')).toEqual('akay_kara@hotmail.com');
            
            ptor.sleep(1500);

        });
    });
    
    
    /**
 * Created by akay on 01.08.2014.
 */


describe("E2E: Testing", function() {

    var ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;

    it("Import", function() {
       // ptor.get('http://localhost:63342/BespokeCloud/app/index.html');
        ptor.get('http://188.226.206.224/app');
        ptor.sleep(1500);

        element.all(by.id('file')).then(function(selectItem) {
            selectItem[0].click(); //will click on first item

        element.all(by.id('btn-sceneGraphCellBrowserPopover')).then(function(selectItem) {
            selectItem[0].click(); //will click on first item

            ptor.findElement(protractor.By.model('import')).click();

            var imp = ptor.findElement(protractor.By.model('import.browse'));
        //    imp.sendKeys('/home/akay/Desktop/horse-obj.stl');
            imp.sendKeys('/root/horse-obj.stl');
            ptor.sleep(7500);

            //ptor.pause();
            var t = {x:326,y:188};
            var a = {x:1207, y:15};


                element.all(by.id('cellbrowser-content')).then(function(selectItem) {
                   selectItem[0].click(); //will click on first item

            ptor.sleep(2500);
/*

            element.all(by.id('file')).then(function(selectItem) {
                selectItem[0].click(); //will click on first item

                element.all(by.id('btn-sceneGraphCellBrowserPopover')).then(function(selectItem) {
                selectItem[0].click(); //will click on first item

            element.all(by.id('modify')).then(function(selectItem) {
               selectItem[0].click(); //will click on first item

            ptor.findElement(protractor.By.model('object.transformations.mode')).click();
*/

/*

                    element.all(by.id('bottom-arrow')).then(function(selectItem) {
                        ptor.driver.actions().mouseDown(selectItem[0]).perform();
*/

                    ptor.sleep(3500);

        });
});
});
});
});
/*
});
});
});
});*/

    
    
});
