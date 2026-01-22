/**
 * Hooks are functions to be used to set up preconditions
 * and do cleanups agter the tests
 * 
 * Example:
 */

describe("Hooks", function(){
    before(function(){
        //runs once before the first test in this block "Hooks"
    })
    
    after(function(){
        //runs once after the first test in this block "Hooks"
    })
    
    beforeEach(function(){
        //runs before each test in this block "Hooks"
    })
    afterEach(function(){
        //runs after each test in this block "Hooks"
    })
})

/**
 * For a better experience when debugging your tests, its a great 
 * practice to name your hooks or describe them 
 * 
 * Example: when it gives an error cleaning the form at the email describe, 
 * if we didnt name our function it would appear " Form after each hook for "Email tests""
 * but by naming it it appears like this: "Form after each: "cleaning the form" hook for "Email tests""
 * 
 * In a deeper level, you can put descriptions in your hooks just like the beforeEach
 * in the following example
 */

describe("Form", function(){
    beforeEach("cleaning the form before an input", function(){
        //cleans the form
    })

    afterEach(function cleansFormAfter(){
        //cleans the form
    })

    describe("Email tests", function(){
        it("should be a valid email", function(){
            //code
        })
    })
    describe("Password tests", function(){
        it("should have a length greater than 5", function(){
            //code
        })
    })
})

/**
 * Asynchronous hooks
 * 
 * lets say everytime you test a database, you wish to fill it 
 * with dummy content:
 */

describe("Database", function(){
    // let db = new Connection()
    // tobi = new User('tobi')
    // lexi = new User('lexi')
    // aren = new User('aren')

    beforeEach("filling the database with dummy users", async function(){
        // await db.save([tobi, lexi, aren])
    })

    describe("Delete", function(){
        // deletes an user
    })
})
