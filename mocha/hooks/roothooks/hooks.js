/**
 * In some cases you might want a hook before every test in
 * every file, you can accomplish this using root hooks
 * 
 * beforeAll will run before the tests start only once
 * 
 * In this case beforeEach is an array, not a function
 * so it has to be imported in a different way or required when
 * executing the file that imports them
 */

exports.mochaHooks = {
    beforeEach: [
        async function(){
            console.log(".......This is a Before each.......")
        },
        async function(){
            console.log(".......Cleaning Data.......")
        }
    ],
    beforeAll(){
        console.log(".......This is a Before all.......")
    }
};