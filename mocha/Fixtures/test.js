/**
 * to run this file using the fixtures, run the command:
 * "mocha --require fixtures.js test.js"
 */
const assert = require('node:assert')

describe('main tests', function(){

    it("should return 5", function(){
        let array = [1, 2, 3, 4]
        array.push(5)
        assert.ok(array.length, 5)
    })

    it("should return the summ", function(){
        let a = 2
        let b = 3
        assert.ok(a + b, 5)
    })

})

describe('secondary tests', function(){

    it("should return true", function(){
        let flag = false
        assert.ok(!flag, true)
    })

})
