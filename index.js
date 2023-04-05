// const printTest = (string1, string2) => string1 + string2

function receivesAFunction(callback){
    console.log('test')
    const testDone = 'printed'
    callback(testDone)
}
function result(testDone) {
console.log(`the test has been ${testDone} `)
let action = 'no action'
}

function returnsAnAnonymousFunction(testDone){
return () => console.log(`test received therefore ${action}`) 
}

function returnsANamedFunction (testDone){
    return function panic(){
        console.log(`I can't believe it passed, I don't trust the ${action}`)
    }
}

// const test= receivesAFunction(callback)  {
//     return 'test'
// }
