/**
 * You can choose to retry failed tests up to a number of times
 * using the .retries(n) sulfix
 * 
 * Example: 
 */
const {Builder, Browser, By} = require('selenium-webdriver')
const assert = require('node:assert')

let summ = 0

describe("Example tests", function(){
    it("should equal four", function(){
        this.retries(4)
        summ += 1
        assert.equal(summ, 4)
    })
})