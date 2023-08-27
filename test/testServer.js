const { expect } = require("chai");
const request = require("request");

describe("Get: Test", function(){
    it('return statuscode of 200',  function(done){
        request("http://localhost:3000/api/cat",function(a,b,c){
            console.log("arguments[0]")
            console.log(arguments[0])
            console.log("arguments[1]")
            console.log(arguments[1])
            console.log("arguments[2]")
            console.log(arguments[2])
            let resObj = JSON.parse(c)
            expect(resObj.statusCode).to.equal(200);
            done()
        });
    });
});


describe("Post: Test", function() {
  it('return status code of 201', function(done) {
   
const catData = {
    "id":"1",
    "title": "Samarth",
    "subTitle": "Shah ",
    "path": "images/kit.png",
    "description": "I am Sam, :)"
   }; 

    request.post(
      {
        url: 'http://localhost:3000/api/cat',
        json: catData
       
      },
      done()
    );
  });
});

describe("Delete: Test", function() {
    it('return status code of 200', function(done) {
      const cId = '2'; 
  
      request.delete(
        {
          url: 'http://localhost:3000/api/cat/${cId}'
        },
        done()
      );
    });
  });