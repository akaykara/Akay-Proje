
//console.log('hello! !! test!!!!.....');
//phantom.exit();

/*var page = require("webpage").create();
page.open("http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html")
    .then(function(status){
        if (status == "success") {
            console.log("The title of the page is: "+ page.title);
        }
        else {
            console.log("Sorry, the page is not loaded");
        }
        page.close();
        phantom.exit();
    })
*/


var webPage = require('webpage');
var page = webPage.create();

page.open('http://m.bing.com', function(status) {

  var title = page.evaluate(function() {
    return document.title;
  });

  console.log(title);
  phantom.exit();

});
