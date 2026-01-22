/**
 * Global fixtures are like root hook but are guaranteed
 * to run only once before the tests, you can use it to
 * start a server test etc.
 * 
 * There are two types of global fixtures:
 * * 1.Global setup fixture
 * * 2.Global teardown fixture
 * 
 * 
 * Example
 */

exports.mochaGlobalSetup = function(){
    console.log('......Starting test server.......')
}
exports.mochaGlobalTeardown = function(){
    console.log('.......Closing the test server........')
}