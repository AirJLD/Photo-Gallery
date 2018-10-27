const server = require('../server');
const request = require('./request');

describe("routes: index", () => {
  test("should get 404", function() {
    return request(`http://127.0.0.1:1128/login`)
      .then(function(response){
        expect(response.status).toEqual(404)
      })
      .catch(function(error){
        console.log(error)
      })

  })
})