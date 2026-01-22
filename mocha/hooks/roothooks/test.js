const assert = require('node:assert')
const { mochaHooks } = require('./hooks')
/**
 *  Using the beforeEach and beforeAll hooks
 * 
 *  This is the less recommended way of importing the
 *  beforeEach functions, the better way is when running
 *  this file by the terminal, using:
 * 
 *   'mocha --require hooks-file.js test-file.js'
*/

// beforeEach(mochaHooks.beforeEach[0])
// beforeEach(mochaHooks.beforeEach[1])
before(mochaHooks.beforeAll)

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
