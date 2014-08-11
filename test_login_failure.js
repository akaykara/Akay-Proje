/**
 * Created by akay on 31.07.2014.
 */

describe("E2E: Testing", function() {

    var ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;

it("Selenium Test", function() {

        ptor.get('http://127.0.0.1:4444/wd/hub');
        ptor.sleep(2000);

    });


    it("Drawing Test", function() {
    	
       // ptor.get('http://localhost:63342/BespokeCloud/app/index.html');

 ptor.get('http://188.226.206.224/app/#/connect');
        ptor.sleep(5000);

        element.all(by.id('drawing')).then(function(selectItem) {
            selectItem[0].click(); //will click on first item

            element.all(by.id('btn-drawingPalletPopover')).then(function(selectItem) {
                selectItem[0].click(); //will click on first item

                    element.all(by.id('free.drawing')).then(function(selectItem) {
                    selectItem[0].click(); //will click on first item


        var a ={x:571,y:237};
        var c = {x:475,y:130};

        ptor.actions().mouseDown({x:571,y:237}).mouseUp().perform();
       // ptor.actions().mouseMove({x:1288, y:17}).perform();
        ptor.sleep(1200);

//                           element.all(by.id('btn-freeDrawingPopover')).then(function(selectItem) {
//                         selectItem[0].click(); //will click on first item

//                               element.all(by.id('widthSlider')).then(function(selectItem) {
//                                   selectItem[0].click(); //will click on first item

                        // var a = ptor.findElement(protractor.By.model('freeDrawingSlider.heightSlider'));
                        // a.click();

                    //     var b = ptor.findElement(protractor.By.model('freeDrawingSlider.widthSlider'));
                      //   b.click();


                        element.all(by.id('free.drawing')).then(function(selectItem) {
                            selectItem[0].click(); //will click on first item

                            element.all(by.id('free.drawing')).then(function(selectItem) {
                                selectItem[0].click(); //will click on first item


        ptor.actions().mouseDown({x:475,y:137}).perform();
                                ptor.sleep(1000);
            ptor.actions().mouseMove({x:500,y:137}).perform();
                                ptor.sleep(1000);

                                ptor.actions().mouseUp().perform();
                                ptor.sleep(500);


                                element.all(by.id('free.drawing')).then(function(selectItem) {
                                    selectItem[0].click(); //will click on first item

                                    element.all(by.id('free.drawing')).then(function(selectItem) {
                                        selectItem[0].click(); //will click on first item

            ptor.driver.actions().dragAndDrop({x:540, y:200}, { x:505,y:200}).perform();
                                        ptor.sleep(1400);
                                     //   ptor.driver.actions().dragAndDrop({x:560, y:220}, { x:505,y:200}).perform();


      //  var dragElement = ptor.driver.findElement(protractor.By.id('draggable'));
        //var dropElement = ptor.driver.findElement(protractor.By.id('droppable'));
        //browser.actions().mouseMove(target).mouseMove(1,1).perform();

          //  ptor.actions().dragAndDrop(a,b).perform();


            ptor.sleep(2000);
    });
});
});
});
});
});
});
});
});
